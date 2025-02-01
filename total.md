### .github\workflows\scholar_info.yml

```
name: Get Citation Data

on: 
 page_build: 
 schedule:
  - cron:  '0 6 * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install Reqs
      run: |
        sudo apt-get install python3-setuptools
    - name: Run
      run: |
        cd ./google_scholar_crawler
        pip3 install -r requirements.txt
        python3 main.py
        git add "../assets/results/"
        git config --global user.email "holmescaoxy@gmail.com"
        git config --global user.name "holmescao"
        git commit -m "* update `date '+%Y-%m-%d %H:%M:%S'`"
        git push

```

### assets\bibtex\duan2023rdt.bib

```
@article{duan2023rdt,
  title={RDT-FSDet: Few-shot Object Detection for Rapid Antigen Test},
  author={Duan, Yaofei and Wang, Rongsheng and Tan, Tao and Jin, Xiaoyan and Lam, Chan-Tong and Im, Sio-Kei},
  journal={Interdisciplinary Nursing Research},
  volume={2},
  number={4},
  pages={222--228},
  year={2023},
  publisher={LWW}
}
```

### assets\bibtex\duan2023vit.bib

```
@inproceedings{duan2023vit,
  title={Aux-vit: classification of Alzheimer's disease from mri based on vision transformer with auxiliary branch},
  author={Duan, Yaofei and Wang, Rongsheng and Li, Yukun},
  booktitle={2023 5th International Conference on Communications, Information System and Computer Engineering (CISCE)},
  pages={382--386},
  year={2023},
  organization={IEEE}
}
```

### assets\bibtex\wang2022efficientnet.bib

```
@inproceedings{wang2022efficientnet,
  title={EfficientNet-YOLOv5: Improved YOLOv5 Based on EfficientNet Backbone for Object Detection on Marine Microalgae},
  author={Wang, Rongsheng and Li, Yukun and Duan, Yaofei and Tan, Tao},
  booktitle={2022 6th International Conference on Universal Village (UV)},
  pages={1--5},
  year={2022},
  organization={IEEE}
}
```

### assets\bibtex\wang2023ivygpt.bib

```
@inproceedings{wang2023ivygpt,
  title={Ivygpt: Interactive chinese pathway language model in medical domain},
  author={Wang, Rongsheng and Duan, Yaofei and Lam, ChanTong and Chen, Jiexin and Xu, Jiangsheng and Chen, Haoming and Liu, Xiaohong and Pang, Patrick Cheong-Iao and Tan, Tao},
  booktitle={CAAI International Conference on Artificial Intelligence},
  pages={378--382},
  year={2023},
  organization={Springer}
}
```

### assets\bibtex\wang2023lightr.bib

```
@article{wang2023lightr,
  title={LightR-YOLOv5: A compact rotating detector for SARS-CoV-2 antigen-detection rapid diagnostic test results},
  author={Wang, Rongsheng and Duan, Yaofei and Hu, Menghan and Liu, Xiaohong and Li, Yukun and Gao, Qinquan and Tong, Tong and Tan, Tao},
  journal={Displays},
  volume={78},
  pages={102403},
  year={2023},
  publisher={Elsevier}
}
```

### assets\bibtex\wang2023pctm.bib

```
@article{wang2023pctmf,
  title={PCTMF-Net: heart sound classification with parallel CNNs-transformer and second-order spectral analysis},
  author={Wang, Rongsheng and Duan, Yaofei and Li, Yukun and Zheng, Dashun and Liu, Xiaohong and Lam, Chan Tong and Tan, Tao},
  journal={The Visual Computer},
  volume={39},
  number={8},
  pages={3811--3822},
  year={2023},
  publisher={Springer}
}
```

### assets\bibtex\xue2024xiaoqing.bib

```
@article{xue2024xiaoqing,
  title={Xiaoqing: A Q\&A model for glaucoma based on LLMs},
  author={Xue, Xiaojuan and Zhang, Deshiwei and Sun, Chengyang and Shi, Yiqiao and Wang, Rongsheng and Tan, Tao and Gao, Peng and Fan, Sujie and Zhai, Guangtao and Hu, Menghan and others},
  journal={Computers in Biology and Medicine},
  volume={174},
  pages={108399},
  year={2024},
  publisher={Elsevier}
}
```

### assets\bibtex\zheng2023focus.bib

```
@article{zheng2023focus,
  title={Focus-RCNet: a lightweight recyclable waste classification algorithm based on focus and knowledge distillation},
  author={Zheng, Dashun and Wang, Rongsheng and Duan, Yaofei and Pang, Patrick Cheong-Iao and Tan, Tao},
  journal={Visual Computing for Industry, Biomedicine, and Art},
  volume={6},
  number={1},
  pages={19},
  year={2023},
  publisher={Springer}
}
```

### assets\css\dataset1.css

```
/* dataset1 页面样式 */

/* 页面背景和容器设置 */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    color: #333;
}

/* 隐藏 Header */
header {
    display: none;
}

/* 左侧悬浮导航栏样式 */
.section-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100%;
    background-color: #003366;
    color: white;
    padding: 30px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 999;
    transition: all 0.3s ease;
    overflow-y: auto;
}

.section-navbar a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    display: block;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.section-navbar a:hover {
    background-color: #007bff;
}

.section-navbar a.active {
    background-color: #0056b3;
}

/* 页面主体区域 */
.container {
    margin-left: 240px;
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: calc(100% - 240px);
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #003366;
    font-weight: bold;
    font-style: italic;
    border-bottom: 2px solid #003366;
    padding-bottom: 10px;
}

p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin: 10px 0;
}

/* 下载链接按钮 */
.download-btn {
    display: inline-block;
    padding: 12px 30px;
    background-color: #007bff;
    color: white;
    border-radius: 25px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 20px;
    transition: background-color 0.3s, transform 0.3s;
}

.download-btn:hover {
    background-color: #0056b3;
    transform: translateY(-5px);
}

/* 动态展示图片 */
#dynamic-display {
    text-align: center;
    margin-bottom: 30px;
}

#dynamic-display img {
    width: 100%;
    max-width: 800px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

#dynamic-display img:hover {
    transform: scale(1.05);
}

/* News section */
.news-section {
    margin-top: 30px;
}

.news-list {
    padding-left: 20px;
}

.news-list li {
    margin-bottom: 12px;
}

.news-list li a {
    color: #007bff;
    font-weight: bold;
}

.news-list li a:hover {
    color: #0056b3;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .section-navbar {
        position: relative;
        width: 100%;
        height: auto;
        box-shadow: none;
    }

    .container {
        margin-left: 0;
        width: 100%;
    }

    header h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.95rem;
    }

    .download-btn {
        padding: 10px 25px;
    }
}
```

### assets\css\global.css

```
@charset "utf-8";

body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    padding-top: 5.0rem;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    font-weight: 700;
}

.text-profile-position {
    font-weight: 400;
}

.text-profile-bio {
    /* font-family: "Raleway"; */
    font-weight: 400;
}

.navbar {
    opacity: 0.95;
}

.inline-badge {
    height: 16px;
    vertical-align: -10%;
    margin-right: 2px;
    line-break: unset;
}

.no-break {
    white-space: nowrap;
}

.cover-image {
    width: 180px;
    max-height: 120px;
}

.abstract-body {
    min-height: 100px;
}

img.lazy {
    background-image: url('images/loading.gif');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50px 50px;
    min-height: 80px;
}

.badge-custom {
    font-size: 100%;
}

.email-text {
    font-family: Courier, monospace;
}


/* 数据集卡片整体布局 */
.card {
    display: flex;
    flex-direction: row;
    /* 左右布局 */
    margin-bottom: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease;
}

/* 图片和卡片边缘的距离 */
.card-img-top {
    object-fit: cover;
    width: 30%;
    /* 调整图片宽度 */
    height: 180px;
    margin: 20px;
    /* 给图片加上上下和左右的距离 */
    /* border-radius: 20px; */
}

.card-body {
    flex: 1;
    /* 右侧内容区域自动填充 */
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.card-text {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #555;
}

.card-meta {
    font-size: 0.9rem;
    color: #888;
    margin-bottom: 15px;
}

/* "Read More" 按钮 */
.btn-readmore {
    padding: 10px 20px;
    color: #007bff;
    /* 设置文字颜色 */
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    text-decoration: none;
    /* 取消默认的链接下划线 */
}

.btn-readmore:hover {
    color: #0056b3;
    /* 悬停时改变文字颜色 */
    transform: translateX(5px);
    /* 悬停右移 */
}

.btn-readmore i {
    margin-left: 8px;
    font-size: 1.2rem;
}

.card-body .btn-readmore:after {
    content: ">>";
    /* 添加箭头符号 */
    margin-left: 8px;
}

/* 响应式设计：手机端自动堆叠 */
@media (max-width: 768px) {
    .card {
        flex-direction: column;
        /* 垂直布局 */
    }

    .card-img-top {
        width: 100%;
        height: 200px;
        object-fit: cover;
        margin: 0;
        /* 手机端图片不需要边距 */
    }

    .card-body {
        padding: 15px;
    }

    .card-title {
        font-size: 1.2rem;
    }

    .card-text {
        font-size: 0.9rem;
    }

    .btn-readmore {
        padding: 8px 15px;
    }
}
```

### assets\css\images\loading.gif

**无法读取文件：** 'utf-8' codec can't decode byte 0xc8 in position 6: invalid continuation byte

### assets\cv\Resume_RongshengWang.pdf

**无法读取文件：** 'utf-8' codec can't decode byte 0xbf in position 10: invalid start byte

### assets\images\empty_300x200.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\hkust-gz.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\hpu_bs.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\Jinan_University_Logo.jpg

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\MIT_Social_circle.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\mpu_master.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\PKU_red.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\qiyuan.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\tencent.jpg

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\badges\XMU.jpg

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\acml2021.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\attlstm2023.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\beeiot.png

**无法读取文件：** 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

### assets\images\covers\giac096.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\icaps2021.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\igrow2022.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\online ants tracking.gif

**无法读取文件：** 'utf-8' codec can't decode byte 0x80 in position 6: invalid start byte

### assets\images\covers\online ants tracking.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\swarm2021.gif

**无法读取文件：** 'utf-8' codec can't decode byte 0x80 in position 6: invalid start byte

### assets\images\covers\swarm2021.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\topictrack.gif

**无法读取文件：** 'utf-8' codec can't decode byte 0x80 in position 6: invalid start byte

### assets\images\covers\topictrack.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\covers\urnn.gif

**无法读取文件：** 'utf-8' codec can't decode byte 0x80 in position 6: invalid start byte

### assets\images\covers\urnn.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\datasets\BEE24.gif

**无法读取文件：** 'utf-8' codec can't decode byte 0x80 in position 6: invalid start byte

### assets\images\etc\bitbug_favicon.ico

**无法读取文件：** 'utf-8' codec can't decode byte 0xa8 in position 14: invalid start byte

### assets\images\etc\cat.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\etc\preview_home.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\etc\preview_publications.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\etc\preview_pub_mobile.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\images\etc\wechat.jpg

**无法读取文件：** 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

### assets\images\photos\55651568.jpeg

**无法读取文件：** 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

### assets\images\photos\portrait.jpg

**无法读取文件：** 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

### assets\images\photos\profile_wrs.jpg

**无法读取文件：** 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

### assets\images\photos\证件照.jpg

**无法读取文件：** 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

### assets\images\poster\CICAI2023-poster.jpg

**无法读取文件：** 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

### assets\images\poster\icml2024-ws.jpeg

**无法读取文件：** 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

### assets\images\poster\WangRongsheng - RSNA Screening Mammography Breast Cancer Detection.png

**无法读取文件：** 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte

### assets\js\common.js

```
$(function () {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        visibleOnly: true,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        }
    })
    $('[data-toggle="tooltip"]').tooltip()
})

```

### assets\results\gs_data.json

```
{
    "container_type": "Author",
    "filled": [
        "basics",
        "publications",
        "indices",
        "counts"
    ],
    "scholar_id": "SSaBaioAAAAJ",
    "source": "AUTHOR_PROFILE_PAGE",
    "name": "Xiaoyan Cao",
    "url_picture": "https://scholar.google.com/citations?user=ZYkHM6wAAAAJ&hl=zh-CN",
    "affiliation": "Unknown affiliation",
    "interests": [
        "Deep Learning"
    ],
    "email_domain": "@mpu.edu.mo",
    "homepage": "https://www.wangrs.site/",
    "citedby": 102,
    "publications": {
        "SSaBaioAAAAJ:Tyk-4Ss8FVUC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Ivygpt: Interactive chinese pathway language model in medical domain",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:Tyk-4Ss8FVUC",
            "num_citations": 17,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2916390581764009944",
            "cites_id": [
                "2916390581764009944"
            ]
        },
        "SSaBaioAAAAJ:roLk4NBRz8UC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Xrayglm: The first chinese medical multimodal model that chest radiographs summarization",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:roLk4NBRz8UC",
            "num_citations": 14,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=6409652873366677896",
            "cites_id": [
                "6409652873366677896"
            ]
        },
        "SSaBaioAAAAJ:d1gkVwhDpl0C": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "LightR-YOLOv5: A compact rotating detector for SARS-CoV-2 antigen-detection rapid diagnostic test results",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:d1gkVwhDpl0C",
            "num_citations": 13,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=1005973705601823718",
            "cites_id": [
                "1005973705601823718"
            ]
        },
        "SSaBaioAAAAJ:zYLM7Y9cAGgC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "PCTMF-Net: heart sound classification with parallel CNNs-transformer and second-order spectral analysis",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:zYLM7Y9cAGgC",
            "num_citations": 11,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16788987744548178084",
            "cites_id": [
                "16788987744548178084"
            ]
        },
        "SSaBaioAAAAJ:_FxGoFyzp5QC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "LLM-Detector: Improving AI-Generated Chinese Text Detection with Open-Source LLM Instruction Tuning",
                "pub_year": "2024"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:_FxGoFyzp5QC",
            "num_citations": 7,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=6779741813548880817",
            "cites_id": [
                "6779741813548880817"
            ]
        },
        "SSaBaioAAAAJ:Y0pCki6q_DkC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Focus-RCNet: a lightweight recyclable waste classification algorithm based on focus and knowledge distillation",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:Y0pCki6q_DkC",
            "num_citations": 7,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=17209689417916501337",
            "cites_id": [
                "17209689417916501337"
            ]
        },
        "SSaBaioAAAAJ:W7OEmFMy1HYC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "DetectGPT-SC: Improving Detection of Text Generated by Large Language Models through Self-Consistency with Masked Predictions",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:W7OEmFMy1HYC",
            "num_citations": 6,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=11784574456378380926",
            "cites_id": [
                "11784574456378380926"
            ]
        },
        "SSaBaioAAAAJ:UeHWp8X0CEIC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Aux-vit: classification of Alzheimer's disease from mri based on vision transformer with auxiliary branch",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:UeHWp8X0CEIC",
            "num_citations": 6,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=8462674019093687788",
            "cites_id": [
                "8462674019093687788"
            ]
        },
        "SSaBaioAAAAJ:ufrVoPGSRksC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Machine mindset: An mbti exploration of large language models",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:ufrVoPGSRksC",
            "num_citations": 5,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=12064747221243809589",
            "cites_id": [
                "12064747221243809589"
            ]
        },
        "SSaBaioAAAAJ:0EnyYjriUFMC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Huatuogpt-o1, towards medical complex reasoning with llms",
                "pub_year": "2024"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:0EnyYjriUFMC",
            "num_citations": 4,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=1057342089210137399",
            "cites_id": [
                "1057342089210137399"
            ]
        },
        "SSaBaioAAAAJ:IjCSPb-OGe4C": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "EfficientNet-YOLOv5: Improved YOLOv5 Based on EfficientNet Backbone for Object Detection on Marine Microalgae",
                "pub_year": "2022"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:IjCSPb-OGe4C",
            "num_citations": 4,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=12690894122653564891",
            "cites_id": [
                "12690894122653564891"
            ]
        },
        "SSaBaioAAAAJ:eQOLeE2rZwMC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Aurora: Activating Chinese chat capability for Mistral-8x7B sparse Mixture-of-Experts through Instruction-Tuning",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:eQOLeE2rZwMC",
            "num_citations": 3,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=5575326184132253436",
            "cites_id": [
                "5575326184132253436"
            ]
        },
        "SSaBaioAAAAJ:LkGwnXOMwfcC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Xiaoqing: A Q&A model for glaucoma based on LLMs",
                "pub_year": "2024"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:LkGwnXOMwfcC",
            "num_citations": 2,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=5446825492815287649",
            "cites_id": [
                "5446825492815287649"
            ]
        },
        "SSaBaioAAAAJ:2osOgNQ5qMEC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Segment anything also Detect anything",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:2osOgNQ5qMEC",
            "num_citations": 2,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13795295954734429105",
            "cites_id": [
                "13795295954734429105"
            ]
        },
        "SSaBaioAAAAJ:UebtZRa9Y70C": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "Fine-tuning medical language models for enhanced long-contextual understanding and domain expertise",
                "pub_year": "2024"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:UebtZRa9Y70C",
            "num_citations": 1,
            "citedby_url": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=15467087543342103329",
            "cites_id": [
                "15467087543342103329"
            ]
        },
        "SSaBaioAAAAJ:MXK_kJrjxJIC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "On the Compositional Generalization of Multimodal LLMs for Medical Imaging",
                "pub_year": "2024"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:MXK_kJrjxJIC",
            "num_citations": 0
        },
        "SSaBaioAAAAJ:hqOjcs7Dif8C": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "3MT-Net: A Multi-modal Multi-task Model for Breast Cancer and Pathological Subtype Classification Based on a Multicenter Study",
                "pub_year": "2024"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:hqOjcs7Dif8C",
            "num_citations": 0
        },
        "SSaBaioAAAAJ:Se3iqnhoufwC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "AnyTaskTune: Advanced Domain-Specific Solutions through Task-Fine-Tuning",
                "pub_year": "2024"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:Se3iqnhoufwC",
            "num_citations": 0
        },
        "SSaBaioAAAAJ:YsMSGLbcyi4C": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "RDT-FSDet: Few-shot Object Detection for Rapid Antigen Test",
                "pub_year": "2023"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:YsMSGLbcyi4C",
            "num_citations": 0
        },
        "SSaBaioAAAAJ:u-x6o8ySG0sC": {
            "container_type": "Publication",
            "source": "AUTHOR_PUBLICATION_ENTRY",
            "bib": {
                "title": "A neural network recommender algorithm based on bidirectional graph attention",
                "pub_year": "2022"
            },
            "filled": false,
            "author_pub_id": "SSaBaioAAAAJ:u-x6o8ySG0sC",
            "num_citations": 0
        }
    },
    "citedby5y": 101,
    "hindex": 6,
    "hindex5y": 6,
    "i10index": 4,
    "i10index5y": 4,
    "cites_per_year": {
        "2023": 16,
        "2024": 75,
        "2025": 10
    },
    "updated": "2025-01-29 06:13:53.750478"
}
```

### assets\results\gs_data_shieldsio.json

```
{"schemaVersion": 1, "label": "citations", "message": "102"}
```

### datasets\dataset1.html

```
---
layout: default
title: Dataset 1
---

<head>
    <link rel="stylesheet" href="/assets/css/dataset1.css">
</head>


<section class="container">
    <!-- 动态展示区 -->
    <div id="dynamic-display">
        <img src="path-to-your-image.gif" alt="Dataset Display">
    </div>

    <!-- About Section -->
    <section id="about">
        <h2>About Dataset 1</h2>
        <p>This dataset contains detailed annotated data for object detection and tracking. It includes multiple
            sequences captured in various real-world scenarios.</p>
    </section>

    <!-- Download Section -->
    <section id="download">
        <h2>Download</h2>
        <p><a class="download-btn" href="path-to-dataset">Download Dataset 1</a></p>
    </section>

    <!-- News Section -->
    <section id="news" class="news-section">
        <h2>News</h2>
        <ul class="news-list">
            <li><a href="#">New dataset update released in 2021.</a></li>
            <li><a href="#">Image sequences and detection results are now available.</a></li>
            <li><a href="#">Our dataset was presented at a recent conference.</a></li>
        </ul>
    </section>

    <!-- References Section -->
    <section id="references">
        <h2>References</h2>
        <ul>
            <li><a href="#">Dataset 1: A Comprehensive Guide</a></li>
            <li><a href="#">Related Research Paper</a></li>
        </ul>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <h2>Contact</h2>
        <p>If you have any questions or suggestions, please contact us at <a
                href="mailto:contact@example.com">contact@example.com</a>.</p>
    </section>
</section>
```

### google_scholar_crawler\main.py

```
from scholarly import scholarly
import jsonpickle
import json
from datetime import datetime
import os

author: dict = scholarly.search_author_id("SSaBaioAAAAJ")
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
name = author['name']
author['updated'] = str(datetime.now())
author['publications'] = {v['author_pub_id']:v for v in author['publications']}
print(json.dumps(author, indent=2))
os.makedirs('../assets/results', exist_ok=True)
with open(f'../assets/results/gs_data.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldio_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with open(f'../assets/results/gs_data_shieldsio.json', 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)

```

### google_scholar_crawler\requirements.txt

```
jsonpickle==1.4.2
scholarly==1.5.1

```

### _data\authors.yml

```
"Xiaoyan Cao":
  bold: true
  url: https://scholar.google.com/citations?hl=zh-CN&user=ZYkHM6wAAAAJ&view_op=list_works&sortby=pubdate
  

```

### _data\datasets.yml

```
- name: BEE24
  image: assets/images/datasets/BEE24.gif
  description: "BEE24 is a large-scale MOT datasets, includes a total of 36 videos and about 45k annotations. It highlights complex motion patterns, serving as a challenging benchmark for advancing general MOT algorithms research."
  url: /datasets/dataset1


```

### _data\display.yml

```
homepage:
  show_experience: true
  show_news: true
  show_selected_publications: true
  num_news: 10

```

### _data\navigation.yml

```
pages:
- name: Home
  url: ./
- name: Publications
  url: publications
- name: Datasets
  url: datasets

```

### _data\profile.yml

```
primary_name: "Xiaoyan Cao"
secondary_name: ""
navbar_name: "Xiaoyan Cao's Home Page"

positions:
  - '<span class="no-break"><img src="assets/images/badges/PKU_red.png" alt="Peking University" class="inline-badge"/></span> Ph.D. student Peking University'

email: "caoxiaoyan@stu.pku.edu.cn"
gscholar: https://scholar.google.com/citations?user=ZYkHM6wAAAAJ&hl=zh-CN
sscholar: X.-Cao/50322492
github: holmescao
twitter: caoxiaoyan7
wechat_qrcode: assets/images/etc/wechat.jpg
zhihu: mryan-50
# resume: assets/cv/Resume_RongshengWang.pdf
# linkedin: your-linked-in-id
orcid: 0000-0002-4980-2050

short_bio: >-
  I am currently a Ph.D. student at Peking University (PKU), under the supervision of <a href="https://scholar.google.com/citations?hl=zh-CN&user=4sRgmaIAAAAJ">Prof. Huapeng Qin</a>. 
  Additionally, I am a remote visiting scholar at the University of Edinburgh, working with a Fellow of the Royal Academy of Engineering <a href="https://scholar.google.com/citations?user=2Np3wJ4AAAAJ&hl=zh-CN">Prof. Alistair Borthwick</a>. 
  Previously, I obtained my M.S. degree from Xiamen University, where I was advised by <a href="https://scholar.google.com/citations?user=yxyC-o0AAAAJ&hl=zh-CN">Prof. Xiaoyu Cao</a>, a recipient of the Excellent Young Scientists Fund (EYSF), 
  and <a href="https://scholar.google.com/citations?user=RPAVxiAAAAAJ&hl=zh-CN">Prof. Shihui Guo</a>.
  During my master's studies, I spent a year as an Algorithm Researcher (Intern) at Tencent AI Lab and was rated as an Outstanding Intern,
  under the joint supervision of Senior Engineer <a href="https://scholar.google.com/citations?user=n8IjgKkAAAAJ&hl=zh-CN">Dr. Lanqing Li</a>
  and Expert Engineer <a href="https://scholar.google.com/citations?user=y_1aniIAAAAJ&hl=zh-CN">Dr. Dijun Luo</a>. 
  I have closely collaborated with <a href="https://scholar.google.com/citations?user=hNO0NdEAAAAJ&hl=zh-CN">Dr. Yao Yao</a> from Tsinghua University and <a href="https://scholar.google.com/citations?user=8cnXnOEAAAAJ&hl=zh-CN">Prof. Guangtao Fu</a> from the University of Exeter.
  <br><br><b>My research mainly focuses on AI for Science, including AI applications in 2D hydrological and hydrodynamic simulations, multi-insect tracking, and greenhouse crop simulations.</b>
  I am dedicated to exploring how to integrate domain knowledge into AI models, aiming to enhance generalization and produce results that are more aligned with physical laws.
  Recently, my focus has been on embedding hydrodynamic knowledge (e.g., shallow water equations) into neural networks to enable general flood modeling, including solving, generalization, and knowledge discovery.
  <br><br>My research has been published in multiple top-tier journals and conferences, such as IEEE Transactions on Image Processing, Pattern Recognition, Journal of Hydrology, AAAI, and ICAPS.


show_portrait: true
portrait_url: assets/images/photos/证件照.jpg
portrait_caption: >-
  我是曹小䶮，欢迎访问我的主页~

# education:

# - name: Peking University
#   logo: assets/images/badges/PKU_red.png
#   position: M.S. in Computer Science and Technology (AI) # TODO: 改到这里
#   date: Sep. 2019 - Jul. 2022
# - name: Xiamen University
#   logo: assets/images/badges/XMU.png
#   position: M.S. in Computer Science and Technology (AI) # TODO: 改到这里
#   date: Sep. 2019 - Jul. 2022
# - name: Jinan University
#   logo: assets/images/badges/Jinan_University_Logo.png
#   position: B.S. in information security
#   date: Sep. 2015 - Jul. 2019
  
experience:
- name: Tencent AI Lab
  logo: assets/images/badges/tencent.jpg
  position: Algorithm Researcher (Intern)
  date: Mar. 2020 - Mar. 2021


# awards:
# - name: Outstanding Award of JingDong Health - Global AI Innovation Competition
#   date: 2024
# - name: First Prize of Baidu PaddlePaddle AGI Hackathon
#   date: 2024
# - name: Third Prize of Digital Medical Technology and Application Innovation Competition
#   date: 2023
# - name: Third Prize of Baichuan Intelligence and Amazon Cloud AGI Hackathon
#   date: 2023
# - name: Silver of Kaggle RSNA Screening Mammography Breast Cancer Detection
#   date: 2023
# - name: Outstanding Award of IEEE UV 2022 "Vision Meets Algae" Object Detection Challenge
#   date: 2022
# - name: <a href="https://www.paddlepaddle.org.cn/ppdemd?n=/ppdemd/%E7%8E%8B%E8%8D%A3%E8%83%9C">Baidu PaddlePaddle Developers Experts</a>
#   date: 2021

service:
- name: Reviewer of IEEE Transactions on Industrial Informatics
- name: Reviewer of AAAI Conference on Artificial Intelligence

# Feel free to replace the footer text if you would like to, but I will greatly appreciate it 
# if you keep the link to the template so that more people can benefit from it. Thanks!
footer_text: >-
  Copyright © 2025 <a href="https://github.com/holmescao" target="_blank">Xiaoyan Cao</a>. All Rights Reserved.

```

### _includes\footer.html

```
<footer class="footer">
    <div class="container">
        <div class="row my-3">
            <div class="col-6">
                <div class="text-muted">
                    <i>Last updated: {{ "now" | date: "%b %Y" }}</i>
                </div>
            </div>
            <div class="col-6">
                <div class="text-right text-muted">
                    {{ site.data.profile.footer_text }}
                </div>
            </div>
        </div>
    </div>
</footer>

```

### _includes\navbar.html

```
<nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top mb-5 shadow-sm">
    <div class="container">
        <a class="navbar-brand"><strong>{{site.data.profile.navbar_name}}</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                {% for item in site.data.navigation.pages %}
                <li class="nav-item {% if item.name == page.navbar_name %}active{% endif %}">
                    <a class="nav-link" href="{{ item.url }}">{{ item.name }}
                        {% if item.url == page.url %}<span class="sr-only">(current)</span>{% endif %}
                    </a>
                </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</nav>

```

### _includes\widgets\author_list.html

```
{%- assign authors = include.authors -%}
{%- assign has_eq_contrib = false -%}
{%- assign has_corresponding = false -%}

{%- for _key in authors -%}
    {%- assign last_char = _key | slice: -1, 1 -%}
    
    {%- assign key = _key -%}
    {%- assign eq_mark = "" -%}
    {%- assign corr_mark = "" -%}

    {%- if _key contains "†" -%}
        {%- assign key = _key | split: "†" | first -%}
        {%- assign eq_mark = "†" -%}
        {%- assign has_eq_contrib = true -%}
    {%- endif -%}

    {%- if _key contains "*" -%}
        {%- assign key = key | split: "*" | first -%}
        {%- assign corr_mark = "*" -%}
        {%- assign has_corresponding = true -%}
    {%- endif -%}

    {%- assign info = site.data.authors[key] -%}

    {%- if info['name'] -%}
        {%- assign name = info['name'] -%}
    {%- else -%}
        {%- assign name = key -%}
    {%- endif -%}

    {%- assign display_name = name | append: eq_mark | append: corr_mark -%}

    {%- if info['bold'] == true -%}
        {%- assign display_name = "<strong>" | append: display_name | append: "</strong>" -%}
    {%- endif -%}
    
    {%- if info['url'] -%}
        <a class="text-body" target="_blank" href="{{ info['url'] }}">{{ display_name }}</a>{%- if forloop.index < authors.size -%}, {% endif -%}
    {%- else -%}
        <span class="text-body">
            {{ display_name }}{%- if forloop.index < authors.size -%}, {% endif -%}
        </span>
    {%- endif -%}

{%- endfor -%}

{%- if has_eq_contrib == true or has_corresponding == true -%}
     (*<i>corresponding author</i>, †<i>equal contribution<i>)
{%- endif -%}

```

### _includes\widgets\experience_card.html

```
<div class="row mt-3">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body p-4">

                <div class="row">
                    {% if site.data.profile.education %}
                    <div class="col-md-6">
                        <div class="mx-2 my-1">
                            <h6>Education</h6>
                            <ul class="list-unstyled mb-1">
                                {% for item in site.data.profile.education %}
                                <li class="media mb-1">
                                    <img src="{{ item.logo }}" alt="{{ item.name }}" style="width: 18px;" class="mr-1 mt-1">
                                    <div class="media-body">
                                        <p class="my-0">{{ item.name }}</p>
                                        <p class="small my-0">{{ item.dept }}</p>
                                        <p class="small my-0">{{ item.position }} <em class="float-right">{{ item.date }}</em></p>
                                    </div>
                                </li>
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                    {% endif %}


                    {% if site.data.profile.awards %}
                    <div class="col-md-6">
                        <div class="mx-2 my-1">
                            <h6>Honors & Awards</h6>
                            <ul class="list small pl-3 mb-1">
                                {% for item in site.data.profile.awards %}
                                <li>{{ item.name }} <em class="float-right">{{ item.date }}</em></li>
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                    {% endif %}

                    {% if site.data.profile.experience %}
                    <div class="col-md-6">
                        <div class="mx-2 my-1">
                            <h6>Experience</h6>
                            <ul class="list-unstyled mb-1">
                                {% for item in site.data.profile.experience %}
                                <li class="media mb-1">
                                    <img src="{{ item.logo }}" alt="{{ item.name }}" style="width: 18px;" class="mr-1 mt-1">
                                    <div class="media-body">
                                        <p class="my-0">{{ item.name }}</p>
                                        <p class="small my-0">{{ item.dept }}</p>
                                        <p class="small my-0">{{ item.position }} <em class="float-right">{{ item.date }}</em></p>
                                    </div>
                                </li>
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                    {% endif %}

                    {% if site.data.profile.service %}
                    <div class="col-md-6">
                        <div class="mx-2 my-1">
                            <h6>Service</h6>
                            <ul class="list small pl-3 mb-1">
                                {% for item in site.data.profile.service %}
                                <li>{{ item.name }}</li>
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                    {% endif %}
                    
                </div>

            </div>
        </div>
    </div>
</div>

```

### _includes\widgets\news_card.html

```
{% assign news_by_year = site.news | sort: "date" | reverse | slice: 0, include.limit | group_by_exp: "item", "item.date | date: '%Y'" -%}

<div class="my-3 bg-white shadow-sm rounded-sm">
    <h6 class="p-3 mb-0 border-bottom border-gray"><i class="fas fa-rss"></i> News</h6>
    <div class="px-3 pb-1">
        {% for year in news_by_year %}
        <div class="media py-1 {% if not_first -%}border-top border-gray{%- endif %}">
            {% assign not_first = true %}
            <div class="mr-3 text-muted my-1">{{ year.name }}</div>
            <div class="media-body">
                {% for item in year.items %}
                <div class="my-1 d-flex">
                    <div>{{ item.title }}</div>
                    <div class="ml-auto mt-auto text-muted no-break"><i>{{ item.date | date: "%b %d" }}</i></div>
                </div>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</div>

```

### _includes\widgets\profile_card.html

```
<div class="row">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body p-5">
                <div class="row">
                    <div class="col">
                        <p class="h1 font-weight-normal">{{ site.data.profile.primary_name }} <small>{{
                                site.data.profile.secondary_name }}</small></p>
                        <p class="text-profile-position">
                            {% for position in site.data.profile.positions %}
                            {{ position }}<br />
                            {% endfor %}
                            {% if site.data.profile.cv_link %}
                            <a target="_blank" href="{{ site.data.profile.cv_link }}"><i class="fas fa-file-alt"></i>
                                [Curriculum Vitae]</a> <br />
                            {% endif %}
                        </p>
                        <p class="text-profile-bio">
                            {{ site.data.profile.short_bio }}
                        </p>
                    </div>
                    {% if site.data.profile.show_portrait %}
                    <div class="col-md-auto d-none d-md-block">
                        <figure class="figure">
                            <img src="{{ site.data.profile.portrait_url }}" class="figure-img img-fluid img-thumbnail"
                                style="height: 200px;" data-toggle="tooltip" data-placement="top"
                                title="{{ site.data.profile.portrait_caption }}">
                            <figcaption class="figure-caption text-right"></figcaption>
                        </figure>
                    </div>
                    {% endif %}

                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <a class="pr-3 no-break" href="mailto:{{ site.data.profile.email | encode_email }}">
                            <i class="fas fa-at"></i> <span class="email-text">{{ site.data.profile.email | replace:
                                "@", "(at)" }}</span>
                        </a>

                        {% if site.data.profile.gscholar %}
                        <a class="pr-3 no-break" target="_blank"
                            href="https://scholar.google.com/citations?user={{ site.data.profile.gscholar }}&hl=en">
                            <i class="fab fa-google"></i> Google Scholar
                        </a>
                        {% endif %}

                        {% if site.data.profile.sscholar %}
                        <a class="pr-3 no-break" target="_blank"
                            href="https://www.semanticscholar.org/author/{{ site.data.profile.sscholar }}">
                            <i class="fa fa-book"></i> Semantic Scholar
                        </a>
                        {% endif %}

                        {% if site.data.profile.github %}
                        <a class="pr-3 no-break" target="_blank"
                            href="https://github.com/{{ site.data.profile.github }}">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        {% endif %}

                        {% if site.data.profile.wechat_qrcode %}
                        <a class="pr-3 no-break" data-toggle="modal" data-target="#modal-wechat">
                            <i class="fab fa-weixin"></i> WeChat
                        </a>
                        {% endif %}

                        {% if site.data.profile.twitter %}
                        <a class="pr-3 no-break" target="_blank"
                            href="https://twitter.com/{{ site.data.profile.twitter }}">
                            <i class="fab fa-twitter"></i> Twitter
                        </a>
                        {% endif %}

                        {% if site.data.profile.zhihu %}
                        <a class="pr-3 no-break" target="_blank"
                            href="https://www.zhihu.com/people/{{ site.data.profile.zhihu }}">
                            <i class="fab fa-zhihu"></i> ZhiHu
                        </a>
                        {% endif %}

                        {% if site.data.profile.resume %}
                        <a class="pr-3 no-break" target="_blank"
                            href="https://holmescao.github.io/{{ site.data.profile.resume }}">
                            <i class="fa fa-file"></i> Resume
                        </a>
                        {% endif %}

                        {% if site.data.profile.linkedin %}
                        <a class="pr-3 no-break" target="_blank"
                            href="https://www.linkedin.com/in/{{ site.data.profile.linkedin }}">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                        {% endif %}

                        {% if site.data.profile.orcid %}
                        <a class="pr-3 no-break" target="_blank" href="https://orcid.org/{{ site.data.profile.orcid }}">
                            <i class="fab fa-orcid"></i> ORCID
                        </a>
                        {% endif %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{% if site.data.profile.wechat_qrcode %}
<div class="modal fade" id="modal-wechat" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body p-0">
                <img src="{{ site.data.profile.wechat_qrcode }}" class="img-fluid">
            </div>
            {% if site.data.profile.wechat_prompt %}
            <div class="modal-body p-1">
                {{ site.data.profile.wechat_prompt }}
            </div>
            {% endif %}
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
{% endif %}
```

### _includes\widgets\publication_card.html

```
{% assign publications = include.publications %}
<div class="my-3 p-0 bg-white shadow-sm rounded-sm">
    <h6 class="border-bottom border-gray p-3 mb-0">
        {% if include.title %}{{ include.title }}{% else %}<i class="fas fa-star"></i> Selected Recent Publications{%
        endif %}
        <a href="publications">(view all <i class="fas fa-angle-double-right"></i>)</a>
    </h6>
    {% for item in publications limit:include.limit %}
    {% include widgets/publication_item.html item=item %}
    {% endfor %}
    <h6 class="d-block p-3 mt-0 text-right">
        <a href="publications">All publications <i class="fas fa-angle-double-right"></i></a>
    </h6>
</div>
```

### _includes\widgets\publication_item.html

```
{% assign item = include.item %}
<div class="d-none d-md-block">
    <div class="row no-gutters border-bottom border-gray">
        <div class="col-md-3 col-xl-2 mb-md-0 p-md-3">
            <img data-src="{{ item.cover }}" alt="{{ item.title }}" class="lazy w-100 rounded-sm" src="assets/images/empty_300x200.png">
            {% if item.gif %}
            <img data-src="{{ item.gif }}" alt="{{ item.title }} GIF" class="lazy w-100 rounded-sm mt-2" src="assets/images/empty_300x200.png">
            {% endif %}
        </div>
        <div class="col-md-9 col-xl-10 p-3 pl-md-0">
            <h5 class="mt-0 mb-1 font-weight-normal">{{ item.title }}</h5>
            <p class="mt-0 mb-0 small">{% include widgets/author_list.html authors=item.authors %}</p>
            <p class="mt-0 mb-0 small">{{item.pub_pre}}<i>{{ item.pub }}</i>{{ item.pub_post }} {{ item.pub_date }} {{ item.pub_last }}</p>
            <p class="mt-0 mb-0 small text-muted">{{ item.abstract }}</p>
            
            <p class="small pb-0 mb-0 lh-125 text-muted abstract-links">
                {% for link in item.links %}
                {% if link[1].url %}
                <a target="{{ link[1]['target'] }}" href="{{ link[1]['url'] }}">[{{ link[0] }}]</a>
                {% else %}
                <a target="_blank" href="{{ link[1] }}">[{{ link[0] }}]</a>
                {% endif %}
                {% endfor %}
            </p>

        </div>
    </div>
</div>

<div class="card w-100 d-md-none border-top-0 border-right-0 border-left-0 rounded-0" style="overflow-y: scroll;">
    <img data-src="{{ item.cover }}" alt="{{ item.title }}" class="lazy card-img w-100" src="assets/images/empty_300x200.png">
    {% if item.gif %}
    <img data-src="{{ item.gif }}" alt="{{ item.title }} GIF" class="lazy card-img w-100 mt-2" src="assets/images/empty_300x200.png">
    {% endif %}
    <div class="card-img-overlay d-flex align-items-start flex-column" style="background-color: rgba(255, 255, 255, 0.85);">
        <div class="mb-auto"></div>
        <div>
            <h5 class="mt-0 mb-1 font-weight-normal">{{ item.title }}</h5>
            <p class="mt-0 mb-0 small">{% include widgets/author_list.html authors=item.authors %}</p>
            <p class="mt-0 mb-0 small">{{item.pub_pre}}<i>{{ item.pub }}</i>{{ item.pub_post }} {{ item.pub_date }} {{ item.pub_last }}</p>
            <p class="mt-0 mb-0 small text-muted d-none d-sm-block">{{ item.abstract }}</p>
            
            <p class="small pb-0 mb-0 lh-125 text-muted abstract-links">
                {% for link in item.links %}
                {% if link[1].url %}
                <a target="{{ link[1]['target'] }}" href="{{ link[1]['url'] }}">[{{ link[0] }}]</a>
                {% else %}
                <a target="_blank" href="{{ link[1] }}">[{{ link[0] }}]</a>
                {% endif %}
                {% endfor %}
            </p>
        </div>
    </div>
</div>

```

### _layouts\default.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>{{ page.title }} - {{ site.data.profile.navbar_name }}</title>

  <!-- Stylesheets -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
    integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA=="
    crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
    crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/academicons/1.9.1/css/academicons.min.css"
    integrity="sha512-b1ASx0WHgVFL5ZQhTgiPWX+68KjS38Jk87jg7pe+qC7q9YkEtFq0z7xCglv7qGIs/68d3mAp+StfC8WKC5SSAg=="
    crossorigin="anonymous" />
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lato-font/3.0.0/css/lato-font.min.css"> -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="assets/css/global.css">
  <!-- ICON -->
  <link rel="shortcut icon" href="assets/images/etc/bitbug_favicon.ico" />
  <!-- Quote CSS-->
  <style>
    blockquote {
      font-style: italic;
      color: #555;
      border-left: 10px solid #3498db;
      background: #ecf5fc;
      padding: 15px 20px;
      margin: 20px 0;
      max-width: 920px;
      width: 100%;
      position: relative;
      quotes: "“" "”" "‘" "’";
    }

    blockquote:before {
      color: #3498db;
      content: open-quote;
      font-size: 2em;
      position: absolute;
      left: 10px;
      top: 10px;
    }

    blockquote:after {
      color: #3498db;
      content: close-quote;
      font-size: 2em;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  </style>
</head>

<body class="bg-light" {{ page.body_attr }}>
  {% include navbar.html %}
  <div class="container">
    {{content}}
  </div>
  {% include footer.html %}

  <!-- Scripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"
    integrity="sha512-XKa9Hemdy1Ui3KSGgJdgMyYlUg1gM+QhL6cnlyTe2qzMCYm4nAZ1PsVerQzTTXzonUR+dmswHqgJPuwCq1MaAg=="
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/github-buttons/2.14.2/buttons.min.js"
    integrity="sha512-OYwZx04hKFeFNYrWxIyo3atgGpb+cxU0ENWBZs72X7T9U+NoHPM1ftUn/Mfw7dRDXrqWA6M1wBg6z6fGE32aeA=="
    crossorigin="anonymous"></script>
  <script src="assets/js/common.js"></script>

  <!-- Coze -->
  <script src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.6/libs/cn/index.js"></script>
  <script>
    new CozeWebSDK.WebChatClient({
      config: {
        bot_id: '7417394284674301961',
      },
      componentProps: {
        title: 'Coze',
      },
    });
  </script>
</body>

</html>
```

### _layouts\prompt.html

```
<!DOCTYPE html>
<html class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ page.title }}</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/latolatinfonts.css">
    <link rel="stylesheet" href="assets/css/global.css">
</head>
<style type="text/css">
    .container {
        width: auto;
        max-width: 680px;
        padding: 0 15px;
    }
</style>
<body class="d-flex flex-column h-100">
    <main role="main" class="flex-shrink-0">
        <div class="container">
            {{ content }}
        </div>
    </main>

</body>
</html>

```

### _news\2024-news1.md

```
---
title: >- 
  Our research on 
  <a href="https://www.sciencedirect.com/science/article/pii/S2772375524001898" target="_blank">multi-bee tracking</a>(corresponding author), is accepted by Smart Agricultural Technology. Congrats to YiYao!
date: 2024-09-25 10:00:00 -0800
---

```

### _news\2024-news2.md

```
---
title: >- 
  Our proposed U-RNN architecture for urban flood nowcasting is 
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4935234" target="_blank">preprinted</a>.
date: 2024-08-23 10:00:00 -0800
---

```

### _news\2024-news3.md

```
---
title: >- 
  Our multi-object tracking work
  (<a href="https://drive.google.com/file/d/1KvqQTZWWhyDsQuEIqQY3XLM_8QlYjDqi/view" target="_blank">BEE24 dataset</a>
  and <a href="https://ieeexplore.ieee.org/document/10851814" target="_blank">TOPICTrack algorithm</a>) is accepted by IEEE TIP! 
date: 2024-12-22 10:00:00 -0800
---

```

### _publications\2020\2020-pub-online ants tracking.md

```
---
title:          "Online tracking of ants based on deep association metrics: method, dataset and evaluation"
date:           2020-02-21 00:01:00 +0800
selected:       true
pub:            "Pattern Recognition"
pub_last:       ' <span class="badge badge-pill badge-custom badge-danger">SCI Q1</span>'
pub_date:       "2020"
abstract: >-
  We introduce an online multi-object tracking framework that combines both the motion and appearance information of ants. We obtain the appearance descriptors by using the ResNet model for offline training on a small (N=50) sample dataset. For online association, a cosine similarity metric computes the matching degree between historical appearance sequences of the trajectory and the current detection.
  
cover:          assets/images/covers/online ants tracking.png
gif: assets/images/covers/online ants tracking.gif
authors:
  - Xiaoyan Cao†
  - Shihui Guo†
  - Juncong Lin*
  - Wenshu Zhang
  - Minghong Liao 

links:
  Paper: https://www.sciencedirect.com/science/article/abs/pii/S003132032030039X
  Code: https://github.com/holmescao/multi-ants-tracking
  Dataset: https://data.mendeley.com/datasets/9ws98g4npw/4
---

```

### _publications\2021\2021-pub-acml.md

```
---
title:          Robust Model-based Reinforcement Learning for Autonomous Greenhouse Control
date:           2021-08-29 00:01:00 +0800
selected:       true
pub:            "The 13th Asian Conference on Machine Learning (ACML 2021)"
pub_last:       ' <span class="badge badge-pill badge-custom badge-success">CCF-C</span>'
pub_date:       "2021"
abstract: >-
   we present a model-based robust RL framework for autonomous greenhouse control to meet the sample efficiency and safety challenges. Specifically, our framework introduces an ensemble of environment models to work as a simulator and assist in policy optimization, thereby addressing the low sample efficiency problem. 
   As for the safety concern, we propose a sample dropout module to focus more on worst-case samples, which can help improve the adaptability of the greenhouse planting policy in extreme cases.
  
cover:          assets/images/covers/acml2021.png
authors:
  - Wanpeng Zhang
  - Xiaoyan Cao
  - Yao Yao
  - Zhicheng An
  - Xi Xiao
  - Dijun Luo* 

links:
  Paper: https://proceedings.mlr.press/v157/zhang21e/zhang21e.pdf
---

```

### _publications\2021\2021-pub-icaps.md

```
---
title:          A simulator-based planning framework for optimizing autonomous greenhouse control strategy
date:           2021-01-29 00:01:00 +0800
selected:       true
pub:            "Proceedings of the Thirty-First International Conference on Automated Planning and Scheduling (ICAPS 2021)"
pub_last:       ' <span class="badge badge-pill badge-custom badge-warning">CCF-B</span>'
pub_date:       "2021"
abstract: >-
  We propose a two-stage planning framework to automatically optimize greenhouse control setpoints given specific outside weather conditions. 
  First, we take advantage of cumulative planting data and horticulture   knowledge to build a multi-modular simulator, using neural
  networks to simulate climate change and crop growth in
  the greenhouse. Second, two AI algorithms (reinforcement learning and heuristic algorithm) are applied as
  planning methods to obtain optimal control strategies
  based on the simulator.
  
cover:          assets/images/covers/icaps2021.png
authors:
  - Zhicheng An†
  - Xiaoyan Cao†
  - Yao Yao†
  - Wanpeng Zhang
  - Lanqing Li
  - Yue Wang
  - Shihui Guo
  - Dijun Luo* 
links:
  Paper: https://scholar.google.com/scholar_url?url=https://ojs.aaai.org/index.php/ICAPS/article/download/15989/15800&hl=zh-CN&sa=T&oi=gsb-gga&ct=res&cd=0&d=7717674842387838512&ei=osibZ77dBqOl6rQPjIKgoQ4&scisig=AFWwaebmhJn6DPXgJOAVXVAJTFeh
---

```

### _publications\2022\2022-pub-antdata.md

```
title:          "A dataset of ant colonies’ motion trajectories in indoor and outdoor scenes to study clustering behavior"
date:           2022-11-01 00:01:00 +0800
selected:       true
pub:            "GigaScience"
pub_last:       ' <span class="badge badge-pill badge-custom badge-warning">SCI Q2</span>'
pub_date:       "2022"
abstract: >-
  We collect 10 videos of 3 species of ant colonies from different scenes, including 5 indoor and 5 outdoor scenes.
  We develop an image sequence marking software named VisualMarkData, which enables us to provide annotations of the ants in the videos. (i) It offers comprehensive annotations of states at the individual-target and colony-target levels. 
  (ii) It provides a simple matrix format to represent multiple targets and multiple groups of annotations (along with their IDs and behavior labels).
  (iii) During the annotation process, we propose a simple and effective visualization that takes the annotation information of the previous frame as a reference, and then a user can simply click on the center point of each target to complete the annotation task.
   (iv) We develop a user-friendly window-based GUI to minimize labor and maximize annotation quality.
  
cover:          assets/images/covers/giac096.png
authors:
  - Meihong Wu†
  - Xiaoyan Cao†
  - Ming Yang
  - Xiaoyu Cao
  - Shihui Guo*
  
links:
  Paper: https://ojs.aaai.org/index.php/AAAI/article/view/21440/21189
  Code: https://github.com/holmescao/ANTS_marking_and_analysis_tools
  Dataset: https://data.mendeley.com/datasets/9ws98g4npw/3

```

### _publications\2022\2022-pub-arxiv-swarm.md

```
---
title:          Swarm behavior tracking based on a deep vision algorithm
date:           2022-04-07 00:01:00 +0800
selected:       true
pub:            "Arxiv"
pub_last:       ' <span class="badge badge-pill badge-custom badge-secondary">Preprint</span>'
pub_date:       "2022"
abstract: >-
  We propose a detection and tracking framework for multi-ant tracking in the videos by: 
  (1) adopting a two-stage object detection framework using ResNet-50 as backbone and coding the
  position of regions of interest to locate ants accurately; (2) using the ResNet model to develop the
  appearance descriptors of ants; (3) constructing long-term appearance sequences and combining
  them with motion information to achieve online tracking. 
  
cover:          assets/images/covers/swarm2021.png
gif: assets/images/covers/swarm2021.gif
authors:
  - Meihong Wu
  - Xiaoyan Cao
  - Shihui Guo*
links:
  Paper: https://arxiv.org/pdf/2204.03319
  Dataset: https://data.mendeley.com/datasets/9ws98g4npw/3
---

```

### _publications\2022\2022-pub-igrow.md

```
---
title:          "iGrow: a smart agriculture solution to autonomous greenhouse control"
date:           2022-11-07 00:01:00 +0800
selected:       true
pub:            "The Thirty-Sixth AAAI Conference on Artificial Intelligence (AAAI-22)"
pub_last:       ' <span class="badge badge-pill badge-custom badge-danger">CCF-A</span>'
pub_date:       "2022"
abstract: >-
  We propose a smart agriculture solution named iGrow, for autonomous greenhouse control (AGC):
  (1) for the frst time, we formulate the AGC problem as a Markov decision process (MDP) optimization problem;
  (2) we design a neural network-based simulator incorporated with the incremental mechanism to
  simulate the complete planting process of an autonomous greenhouse, which provides a testbed for the optimization of control strategies; 
  (3) we propose a closed-loop bi-level optimization algorithm, which can dynamically re-optimize the greenhouse control strategy with newly observed data during real-world production.
  We not only conduct simulation experiments but also deploy iGrow in real scenarios,
  and experimental results demonstrate the effectiveness and superiority of iGrow in autonomous greenhouse simulation and optimal control.
  
cover:          assets/images/covers/igrow2022.png
authors:
  - Xiaoyan Cao†
  - Yao Yao†
  - Lanqing Li
  - Wanpeng Zhang
  - Zhicheng An
  - Zhong Zhang
  - Li Xiao
  - Shihui Guo
  - Xiaoyu Cao
  - Meihong Wu
  - Dijun Luo*

  
links:
  Paper: https://ojs.aaai.org/index.php/AAAI/article/view/21440/21189
  Code: https://github.com/holmescao/iGrow
  Dataset: https://github.com/holmescao/iGrow/tree/main/data
  Simulator: https://github.com/holmescao/iGrow/tree/main/TenSim
---

```

### _publications\2023\2023-pub-attlstm.md

```
---
title:          High temporal resolution urban flood prediction using attention-based LSTM models
date:           2023-11-01 00:01:00 +0800
selected:       true
pub:            "Journal of Hydrology"
pub_last:       ' <span class="badge badge-pill badge-custom badge-danger">SCI Q1</span>'
pub_date:       "2023"
abstract: >-
  This study proposes an attention mechanism-based Long Short-Term Memory (LSTM) network,
  named as ALSTM-DW, which uses double time sliding windows (DTSW), and a weighted mean square error (WMSE) loss function.
   The ALSTM-DW model was applied to three urban flooding hotspots in Shenzhen, China, 
   and its effectiveness was verified through a series of comparative experiments.
  
cover:          assets/images/covers/attlstm2023.png
authors:
  - Lin Zhang
  - Huapeng Qin*
  - Junqi Mao
  - Xiaoyan Cao
  - Guangtao Fu
  
links:
  Paper: https://drive.google.com/file/u/0/d/1xLWEASXi0jY2DWEV7UHkLIWnAQQwN317/view
---

```

### _publications\2024\2024-pub-beeiot.md

```
---
title:          Intelligent beehive monitoring system based on internet of things and colony state analysis
date:           2024-12-01 00:01:00 +0800
selected:       true
pub:            "Smart Agricultural Technology"
pub_last:       ' <span class="badge badge-pill badge-custom badge-danger">JCR Q1</span>'
pub_date:       "2024"
abstract: >-
  We proposed a hive monitoring system, and build a visualization module in the cloud to monitor the activity of bee colonies and the environmental dynamic changes. (1) We proposed a multi-bee tracking algorithm to solve the problem of monitoring bees at the door of the hive; (2) we constructed a dataset containing various complex scenes, named BEE22, for training and testing the performance of our algorithm; (3) we designed a bee counting rule, based on results of multi-bee tracking algorithm, to reasonably count the bees entering or leaving the beehive; (4) we have deployed multiple sensors around(center, margin, door, and environment) the hive to accurately reflect the changes in the environment around the hive.
  
cover: assets/images/covers/beeiot.png

authors:
  - Yiyao Zheng
  - Xiaoyan Cao*
  - Shaocong Xu
  - Shihui Guo,
  - Rencai Huang
  - Yingjiao Li
  - Yijie Chen
  - Liulin Yang
  - Xiaoyu Cao
  - Zainura Idrus
  - Hongting Sun
links:
  Paper: https://www.sciencedirect.com/science/article/pii/S2772375524001898
---

```

### _publications\2024\2024-pub-topictrack.md

```
---
title:          "TOPIC: a parallel association paradigm for multi-object tracking under complex motions and diverse scenes"
date:           2024-12-23 00:01:00 +0800
selected:       true
pub:            "IEEE Transactions on Image Processing (IEEE TIP 2024)"
pub_last:       ' <span class="badge badge-pill badge-custom badge-danger">SCI Q1</span>'
pub_date:       "2024"
abstract: >-
  We propose a parallel paradigm and present the Two rOund Parallel matchIng meChanism (TOPIC) to implement it. The TOPIC leverages both motion and appearance features and can adaptively select the preferable one as the assignment metric based on motion level. Moreover, we provide an Attention-based Appearance Reconstruction Module (AARM) to reconstruct appearance feature embeddings, thus enhancing the representation of appearance features.
  
cover: assets/images/covers/topictrack.png
gif: assets/images/covers/topictrack.gif
authors:
  - Xiaoyan Cao†
  - Yiyao Zheng†
  - Yao Yao†
  - Huapeng Qin
  - Xiaoyu Cao
  - Shihui Guo*
links:
  Paper: https://ieeexplore.ieee.org/document/10851814
  Code: https://github.com/holmescao/TOPICTrack
  Dataset: https://drive.google.com/file/d/1KvqQTZWWhyDsQuEIqQY3XLM_8QlYjDqi/view
---

```

### _publications\2024\2024-pub-urnn.md

```
---
title:          U-RNN high-resolution spatiotemporal nowcasting of urban flooding
date:           2024-08-23 00:01:00 +0800
selected:       true
pub:            "SSRN"
pub_last:       ' <span class="badge badge-pill badge-custom badge-secondary">Preprint</span>'
pub_date:       "2024"
abstract: >-
  We propose a novel U-like Recurrent Neural Network (U-RNN) 
  to represent the spatiotemporal dynamic process of urban flooding,
  and a Sliding Window-based Pre-warming (SWP) training paradigm to reduce computational demand
  and enhance the generalization of full sequence predictions.
  
cover: assets/images/covers/urnn.png
gif:  assets/images/covers/urnn.gif
authors:
  - Xiaoyan Cao†
  - Baoying Wang†
  - Yao Yao
  - Lin Zhang
  - Yanwen Xing
  - Junqi Mao
  - Runqiao Zhang
  - Guangtao Fu
  - Alistair GL Borthwick
  - Huapeng Qin*
links:
  Paper: https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=4935234
  Code: https://github.com/holmescao/U-RNN
  Dataset: https://figshare.com/articles/dataset/Supplementary_data_of_U-RNN_high-resolution_spatiotemporal_nowcasting_of_urban_flooding_/28082549?file=51407804
---

```

