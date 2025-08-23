---
title: Segmentation of green roofs in high-resolution remote sensing images with GR-Net
date: 2025-08-21 00:01:00 +0800
selected: true
pub: "IEEE Transactions on Geoscience and Remote Sensing (TGRS)"
pub_last: ' <span class="badge badge-pill badge-custom badge-danger">SCI Q1</span>'
pub_date: "2025"
abstract: >-
  Accurately recognizing the spatial distribution of green roofs is crucial for quantitatively assessing their ecological benefits in urban areas. Deep learning has been applied to this task using remote sensing images, reducing time and labor costs. However, challenges remain due to the irregular shapes, sparse distribution, homogeneity with ground vegetation, and
high annotation costs of green roofs. To address these issues, we propose an end-to-end framework for urban-scale green roof segmentation, integrating:
  (1) a high-resolution attention–based
  convolutional neural network (GR-Net) to extract the contours
  of sparsely distributed green roof patches; (2) a building guided
  module (BGM) to reduce mis-segmentation of ground vegetation;
  (3) a remote sensing prior module (RSPM) to enhance vegetation
  feature discrimination; and (4) data augmentation and transfer
  learning to improve learning efficiency and model generalization.
  Taking Shenzhen, Beijing, and Shanghai as case studies, we
  construct a diverse green roof dataset with varying sources,
  spectra, and spatial resolutions. On the in-domain test dataset,
  GR-Net achieves an F1 score of 0.842 and an intersection over
  union (IoU) of 0.744. When applied to out-of-domain test dataset
  from three new cities, it maintains decent performance, with
  an F1 score of 0.756 and an IoU of 0.633. We also identify
  the optimal configurations for each module. Overall, this work
  presents a practical and reliable tool for quantitative green roof
  assessment.

cover: assets/images/covers/tgrs2025.png
authors:
  - Wang Zhi†
  - Xiaoyan Cao†
  - Yao Yao
  - Lian Feng
  - Huapeng Qin*
links:
  Paper: None
  Code: https://github.com/holmescao/GR-Net
  Dataset: https://github.com/holmescao/GR-Net
---
