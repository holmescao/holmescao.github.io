$(function () {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        visibleOnly: true,
        placeholder: "",
        onError: function (element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        }
    })
    $('[data-toggle="tooltip"]').tooltip()
})


// 请将 your-namespace 替换成你自己的命名空间，例如 "mygithubpages123"
const NAMESPACE = "holmescao";

// ------------------------------
// 针对数据集详情页的浏览量统计：
// 调用 CountAPI 的 hit 接口，增加浏览量并更新页面显示
function updatePageViews() {
    // 当前页面的标题格式假定为 "BEE24 - XXX"，取第一个部分作为数据集名称
    // var pageName = document.title.split(" - ")[0];
    var pageName = document.title;
    var url = `https://api.countapi.xyz/hit/${NAMESPACE}/${pageName}views`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // 更新详情页中的浏览量显示
            document.getElementById("view-count").textContent = data.value;
        })
        .catch(err => console.error("Error updating page views:", err));
}

// ------------------------------
// 针对数据集详情页的下载量统计：
// 当用户点击下载按钮时调用此函数，增加下载量并更新页面显示
function increaseDownloadCount() {
    // var pageName = document.title.split(" - ")[0];
    var pageName = document.title;
    var url = `https://api.countapi.xyz/hit/${NAMESPACE}/${pageName}downloads`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // 更新详情页中的下载量显示
            document.getElementById("download-count").textContent = data.value;
        })
        .catch(err => console.error("Error updating download count:", err));
}

// ------------------------------
// 针对 Datasets 列表页面的更新：
// 遍历所有卡片，根据 data-dataset 属性的值调用 CountAPI 的 get 接口，获取最新计数
function updateDatasetCards() {
    // 遍历每个带 data-dataset 属性的卡片
    $(".card[data-dataset]").each(function () {
        var datasetName = $(this).data("dataset");

        // 更新浏览量
        var viewsUrl = `https://api.countapi.xyz/get/${NAMESPACE}/${datasetName}views`;
        fetch(viewsUrl)
            .then(response => response.json())
            .then(data => {
                $(this).find(".views-count").text(data.value);
            })
            .catch(err => console.error("Error fetching views for", datasetName, err));

        // 更新下载量
        var downloadsUrl = `https://api.countapi.xyz/get/${NAMESPACE}/${datasetName}downloads`;
        fetch(downloadsUrl)
            .then(response => response.json())
            .then(data => {
                $(this).find(".downloads-count").text(data.value);
            })
            .catch(err => console.error("Error fetching downloads for", datasetName, err));
    });
}

// ------------------------------
// 页面加载时，判断页面类型并更新计数
$(document).ready(function () {
    // 如果页面中有 id="view-count"，说明是数据集详情页
    if (document.getElementById("view-count")) {
        updatePageViews();
    }

    // 如果页面中存在数据集卡片，则更新卡片数据
    if ($(".card[data-dataset]").length > 0) {
        updateDatasetCards();
    }
});
