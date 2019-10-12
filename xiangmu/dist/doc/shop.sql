/*
Navicat MySQL Data Transfer

Source Server         : demo
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2019-10-12 18:09:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for 01limitdata
-- ----------------------------
DROP TABLE IF EXISTS `01limitdata`;
CREATE TABLE `01limitdata` (
  `﻿gid` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `minimg` varchar(255) NOT NULL,
  `surprise_price` int(20) NOT NULL,
  `yuan_price` int(20) NOT NULL,
  `limits` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `shengqian` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿gid`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 01limitdata
-- ----------------------------
INSERT INTO `01limitdata` VALUES ('1', '日本原装进口 阿育吠陀 美容护理草本芳香泥 150g', 'https://img1.epetbar.com/2018-10/09/18/9b164ae8cdddf617246987e111148b7e.jpg@!200w-c', '264', '880', '5', '立即抢购', '616');
INSERT INTO `01limitdata` VALUES ('2', '2018年新款 鹿鸣系列 宠物单肩包 42*23*32cm', 'https://img1.epetbar.com/2018-09/30/16/76cc3a25bfc62c39a8233079942526ea.jpg@!200w-c', '111', '278', '5', '立即抢购', '166.8');
INSERT INTO `01limitdata` VALUES ('3', '爱丽思IRIS 托盘抽拉式宠物笼子 S号 粉色 60.5*44.5*47cm', 'https://img1.epetbar.com/goods/sales/upload_file_20194187738.jpg@!200w-c', '91', '178', '5', '立即抢购', '87.1');
INSERT INTO `01limitdata` VALUES ('4', '美国Sturdi Products 可悬挂美容洗漱用品便携包 橙色', 'https://img1.epetbar.com/goods/sales/20190524182708_826110.jpg@!200w-c', '83', '278', '5', '立即抢购', '194.6');
INSERT INTO `01limitdata` VALUES ('5', '2017年新款 BLUE PORT 可爱领结胸背 粉色S号', 'https://img1.epetbar.com/2017-09/26/15/a6aa5a580297a5c77194bc3fddb2c8a2.jpg@!200w-c', '46', '128', '5', '立即抢购', '81.9');
INSERT INTO `01limitdata` VALUES ('6', '风铃鸟 彩圆头曲柄针梳带粘珠 蓝色 L号 16*12cm', 'https://img1.epetbar.com/2018-05/30/14/620bbd080baf434b640d222d8824c669.jpg@!200w-c', '29', '68', '5', '立即抢购', '38.5');
INSERT INTO `01limitdata` VALUES ('7', '捣蛋鬼 密封保鲜粉色双碗 下部长36cm 上部长32cm*高10cm 碗直径12.5cm', 'https://img1.epetbar.com/2015-11/26/10/0264f1db3ddc5b5c0753e7a120f65ec5.jpg@!200w-c', '25', '52', '5', '立即抢购', '26.6');
INSERT INTO `01limitdata` VALUES ('8', '绮敏CharmingPet 圣诞系列发声狗玩具 小鹿 46cm', 'https://img1.epetbar.com/2017-10/30/14/60fc8862a41abe6201c46d2d903d3f2f.jpg@!200w-c', '20', '60', '5', '立即抢购', '39.6');
INSERT INTO `01limitdata` VALUES ('9', '酷极Kyjen TPR缓食狗碗  荧光绿大号直径25.5cm', 'https://img1.epetbar.com/2017-11/17/14/91aed21a0553823e5d8ee5b13418a4ae.jpg@!200w-c', '19', '39', '5', '立即抢购', '20.3');
INSERT INTO `01limitdata` VALUES ('10', '宠友友 挂钩铝筒垃圾袋 蓝色 4*4*8.5cm', 'https://img1.epetbar.com/2018-04/23/18/b6e3a1aa3cdd9af8b416c60ce36858d2.png@!200w-c', '17', '38', '5', '立即抢购', '20.7');
INSERT INTO `01limitdata` VALUES ('11', '宠友友 锌合金宠物地址牌 瑞士国旗 直径约3.2cm', 'https://img1.epetbar.com/2018-04/23/14/fdf5e4d5e417c60254fbad33fe0eee4a.jpg@!200w-c', '10', '30', '5', '立即抢购', '19.6');
INSERT INTO `01limitdata` VALUES ('12', '2017年新款 澳利 迷彩印花方窝 绿色M号64*47*22cm', 'https://img1.epetbar.com/goods/sales/20190524184535_546547.jpg@!200w-c', '11', '112', '5', '立即抢购', '23');
INSERT INTO `01limitdata` VALUES ('13', '日本Petio 粗细排梳 长14.5*宽2.8*针长2.0cm', 'https://img1.epetbar.com/goods/sales/20190604112251_674375.jpg@!200w-c', '9', '95', '5', '立即抢购', '34');
INSERT INTO `01limitdata` VALUES ('14', '美国秀冠 跳蚤及蜱虫洗毛露 16oz(450ml)', 'https://img1.epetbar.com/goods/sales/20190603145308_126925.jpg@!200w-c', '156', '310', '5', '立即抢购', '154');
INSERT INTO `01limitdata` VALUES ('15', '伊丽 Elite 咖啡豹纹狗狗四季铁床 78*48*44cm', 'https://img1.epetbar.com/goods/sales/20190428173641_332108.jpg@!200w-c', '131', '218', '5', '立即抢购', '87.2');
INSERT INTO `01limitdata` VALUES ('16', '美国Ethical Pets 宠物外出包 蓝色', 'https://img1.epetbar.com/2018-11/07/16/ec026513bc3696ae8dc7c255330494cc.jpg@!200w-c', '112', '372', '5', '立即抢购', '259.9');
INSERT INTO `01limitdata` VALUES ('17', '2018年新款爱旺 萍踪系列 宠物单肩包 42*23*32cm', 'https://img1.epetbar.com/2018-09/30/16/1dc853ec74ad4bb1bcbe3587f165e9d4.jpg@!200w-c', '111', '278', '5', '立即抢购', '166.8');
INSERT INTO `01limitdata` VALUES ('18', '2018年新款 鹿鸣系列 宠物双肩包 55*23*32cm', 'https://img1.epetbar.com/2018-09/30/16/ca5a00ffdd1d430d27bb4f3f7c39bc6f.jpg@!200w-c', '111', '278', '5', '立即抢购', '166.8');
INSERT INTO `01limitdata` VALUES ('19', '海瑞特 鲜肉70+系列 全价狗奶糕 1.5kg', 'https://img1.epetbar.com/2018-01/16/20/2bb5eeb6757ab7882e2dad2f55b9da5e.jpg@!200w-c', '70', '145', '5', '立即抢购', '74.6');
INSERT INTO `01limitdata` VALUES ('20', '伊丽  夜光伸缩牵引带 黑白斑马纹图案 绳长3米', 'https://img1.epetbar.com/2015-06/11/3fab90946d532d8026c7829c772772ca.jpg@!200w-c', '65', '138', '5', '立即抢购', '73.2');
INSERT INTO `01limitdata` VALUES ('21', '英国进口 COA 专业宠物行为纠正用品 哈迪口环', 'https://img1.epetbar.com/2015-11/20/14/c0085ee8d58bb211a1181ac3268ef4eb.jpg@!200w-c', '61', '129', '5', '立即抢购', '68.2');
INSERT INTO `01limitdata` VALUES ('22', '英国进口 COA 专业宠物行为纠正用品 哈迪口环', 'https://img1.epetbar.com/2016-12/22/10/e913ac4c004e0392e9fa4b04a1450888.jpg@!200w-c', '61', '129', '5', '立即抢购', '68.2');
INSERT INTO `01limitdata` VALUES ('23', '佳美乐 宠物专用高筒防水雨鞋 90号 蓝色', 'https://img1.epetbar.com/2018-07/06/17/8ff91964b889de06a92acf0ce6021697.jpg@!200w-c', '60', '120', '5', '立即抢购', '60.2');
INSERT INTO `01limitdata` VALUES ('24', '加拿大进口 Messy Mutts 犬用硅胶碗垫不锈钢食碗 灰色 350ml', 'https://img1.epetbar.com/goods/sales/20190524182526_393403.jpg@!200w-c', '44', '109', '5', '立即抢购', '65.3');
INSERT INTO `01limitdata` VALUES ('25', '美国原装进口KONG 黑色强力耐咬漏食球 M/L号', 'https://img1.epetbar.com/2017-10/27/17/0b0c502c71072ce23f04c12806e4ec39.jpg@!200w-c', '38', '125', '5', '立即抢购', '87.5');
INSERT INTO `01limitdata` VALUES ('26', '意大利原装进口United Pets 聚丙烯Dasiy狗碗 红色中号直径25cm', 'https://img1.epetbar.com/2016-11/30/14/2d109836f06f9967d787f4f13a778081.png@!200w-c', '35', '115', '5', '立即抢购', '80.5');
INSERT INTO `01limitdata` VALUES ('27', '美国宜特EETOYS 哑铃橡胶玩具 大号 19*8cm', 'https://img1.epetbar.com/2016-01/26/10/9fad7bc73a5e7d613792c3a4b5e51a4c.jpg@!200w-c', '32', '56', '5', '立即抢购', '23.8');
INSERT INTO `01limitdata` VALUES ('28', '国王世家kings family 收口型狗粮袋 玫红色 10*15cm', 'https://img1.epetbar.com/2018-11/23/13/3ab649bc27d54547e26f77023edc58b7.jpg@!200w-c', '31', '69', '5', '立即抢购', '38.4');
INSERT INTO `01limitdata` VALUES ('29', '红脚丫 橡胶洁齿绳球狗玩具 直径8cm   蓝色', 'https://img1.epetbar.com/2016-01/26/14/2318ca96a06ca515be83710397fc00bf.jpg@!200w-c', '29', '40', '5', '立即抢购', '11.2');
INSERT INTO `01limitdata` VALUES ('30', '美国宜特EETOYS 哑铃球骨橡胶玩具 大号 15*7.5cm', 'https://img1.epetbar.com/goods/sales/20190426112248_719103.jpg@!200w-c', '27', '48', '5', '立即抢购', '20.9');
INSERT INTO `01limitdata` VALUES ('31', '彼痞客ppark 携带型宠物碗 颜色随机 16*16*4cm', 'https://img1.epetbar.com/2016-08/16/16/a40cd60610b072785ae52c056d879caa.jpg@!200w-c', '26', '50', '5', '立即抢购', '24.2');
INSERT INTO `01limitdata` VALUES ('32', '英国ANCOL安蔻儿 护理工具雅致系列 削毛梳刀片（3片装）', 'https://img1.epetbar.com/2015-01/27/dd0ef1dce18312e49b2033299d0a6cee.jpg@!200w-c', '24', '48', '5', '立即抢购', '24.4');
INSERT INTO `01limitdata` VALUES ('33', '波兰原装进口 欧宠 犬用柔顺喷剂 250ml', 'https://img1.epetbar.com/2018-08/28/10/d1422cb5352e0a60a35ff7d59d4e5b75.jpg@!200w-c', '23', '78', '5', '立即抢购', '54.6');
INSERT INTO `01limitdata` VALUES ('34', '2017新款绒域坊 猫全可拆洗靠背宠物方窝  S号50*40*12/22cm', 'https://img1.epetbar.com/goods/sales/20190515165207_79843.jpg@!200w-c', '23', '48', '5', '立即抢购', '25.2');
INSERT INTO `01limitdata` VALUES ('35', '宠友友 织带款硅胶狗嘴套 粉色 小号 嘴围14cm', 'https://img1.epetbar.com/2018-04/23/17/ed5cc9b80f1e5523cd5b61ae90a9e78d.jpg@!200w-c', '17', '38', '5', '立即抢购', '20.7');
INSERT INTO `01limitdata` VALUES ('36', '铲屎官 波浪围栏狗厕所 蓝色 S号40*40*14cm', 'https://img1.epetbar.com/2018-04/02/17/2148ee7bfb9573686bbf41cd260e48b6.png@!200w-c', '16', '35', '5', '立即抢购', '18.7');
INSERT INTO `01limitdata` VALUES ('37', '加拿大进口 Messy Mutts 罐头密封盖 直径约8.5cm 灰色', 'https://img1.epetbar.com/2016-11/30/8/0d60d9dc36f24573f03bcc551e9c20d3.jpg@!200w-c', '15', '48', '5', '立即抢购', '33.1');
INSERT INTO `01limitdata` VALUES ('38', '红脚丫 橡胶CATCH橄榄球狗玩具 长6.5cm   小号', 'https://img1.epetbar.com/2018-03/07/15/02b5ad3e33396a981d44acb72323b73a.jpg@!200w-c', '12', '30', '5', '立即抢购', '17.6');
INSERT INTO `01limitdata` VALUES ('39', '日本Richell 利其尔 高背碗 橘色', 'https://img1.epetbar.com/2016-11/19/14/bd451ed7d6ac55cc920baccd5a373f6c.jpg@!200w-c', '12', '26', '5', '立即抢购', '14');

-- ----------------------------
-- Table structure for 05liebiao
-- ----------------------------
DROP TABLE IF EXISTS `05liebiao`;
CREATE TABLE `05liebiao` (
  `﻿id1` int(255) DEFAULT NULL,
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `bigimg` varchar(255) DEFAULT NULL,
  `smallimg1` varchar(255) DEFAULT NULL,
  `smallimg2` varchar(255) DEFAULT NULL,
  `yuanjia` varchar(255) DEFAULT NULL,
  `xianjia` float(255,2) DEFAULT NULL,
  `yishouchu` varchar(255) DEFAULT NULL,
  `danjia` varchar(255) DEFAULT NULL,
  `hudong` varchar(255) DEFAULT NULL,
  `zhongliang` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 05liebiao
-- ----------------------------
INSERT INTO `05liebiao` VALUES ('1', '1', '比瑞吉俱乐部 健康膳食配方 成犬粮 10kg', 'https://img2.epetbar.com/2018-09/05/09/6a184fa4f48bed1401bf1d00e2385b1a.jpg@!200w-c', 'https://img2.epetbar.com/2018-09/05/09/2befde69ec22bcd45abb3cd462fd0cc1.jpg@!60w-c', 'https://img2.epetbar.com/2018-09/05/09/6a184fa4f48bed1401bf1d00e2385b1a.jpg@!60w-c', '657', '269.00', '222', '23.12', '472', '2.2');
INSERT INTO `05liebiao` VALUES ('2', '2', '比瑞吉 健康型天然粮 泰迪贵宾全价成犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/16/2d114fb1f6ae2f989d35b76ce87cfb75.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/16/2d114fb1f6ae2f989d35b76ce87cfb75.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/16/2d114fb1f6ae2f989d35b76ce87cfb75.jpg@!60w-c', '339', '139.00', '111', '24.12', '483', '3.3');
INSERT INTO `05liebiao` VALUES ('3', '3', '比瑞吉 健康型天然粮 小型犬全价成犬粮 1.5kg', 'https://img2.epetbar.com/2018-07/19/11/da954d97429dc0e0a66b6e5b3a95735f.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/11/9adea7392ba5294dcfd3a0d1ec2bf647.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/11/da954d97429dc0e0a66b6e5b3a95735f.jpg@!60w-c', '238', '99.00', '33', '25.12', '494', '1.5');
INSERT INTO `05liebiao` VALUES ('4', '4', '比瑞吉 无谷益生菌成犬粮 1.5kg', 'https://img2.epetbar.com/2018-07/19/11/f4d693fab88a022aafdab6e241fc001a.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/11/f4d693fab88a022aafdab6e241fc001a.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/11/f4d693fab88a022aafdab6e241fc001a.jpg@!60w-c', '334', '139.00', '44', '26.12', '505', '2.5');
INSERT INTO `05liebiao` VALUES ('5', '5', '比瑞吉 无谷益生菌幼犬粮 1.5KG', 'https://img2.epetbar.com/2018-07/19/11/0ff17fb48a6cc8932c4413d06545e04f.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/11/0ff17fb48a6cc8932c4413d06545e04f.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/11/0ff17fb48a6cc8932c4413d06545e04f.jpg@!60w-c', '458', '149.00', '55', '27.12', '516', '6.4');
INSERT INTO `05liebiao` VALUES ('6', '6', '比瑞吉俱乐部 天然健康膳食配方 成犬粮 1.6kg', 'https://img2.epetbar.com/2018-09/05/09/2befde69ec22bcd45abb3cd462fd0cc1.jpg@!200w-c', 'https://img2.epetbar.com/2018-09/05/09/2befde69ec22bcd45abb3cd462fd0cc1.jpg@!60w-c', 'https://img2.epetbar.com/2018-09/05/09/2befde69ec22bcd45abb3cd462fd0cc1.jpg@!60w-c', '144', '60.00', '66', '28.12', '527', '8.5');
INSERT INTO `05liebiao` VALUES ('7', '7', '比瑞吉俱乐部 天然健康膳食 钙奶助长幼犬粮 450g', 'https://img2.epetbar.com/2017-07/26/16/e1f620ef3276a8975039ec383b2a364b.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190704130509_837980.jpg@!60w-c', 'https://img2.epetbar.com/2017-07/26/16/e1f620ef3276a8975039ec383b2a364b.jpg@!60w-c', '51', '21.00', '77', '29.12', '538', '4.3');
INSERT INTO `05liebiao` VALUES ('8', '8', '比瑞吉俱乐部 健康膳食配方 钙奶助长幼犬粮 1.6kg', 'https://img2.epetbar.com/goods/sales/20190704130509_837980.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190704130509_837980.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190704130509_837980.jpg@!60w-c', '159', '66.00', '88', '30.12', '549', '4.8');
INSERT INTO `05liebiao` VALUES ('9', '9', '比瑞吉 车前子泌尿道全价成犬粮  2kg', 'https://img2.epetbar.com/2018-07/18/13/7204e21530e6cc37a9a85d9a62656d6e.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/18/13/7204e21530e6cc37a9a85d9a62656d6e.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/18/13/7204e21530e6cc37a9a85d9a62656d6e.jpg@!60w-c', '399', '164.00', '99', '31.12', '560', '7.9');
INSERT INTO `05liebiao` VALUES ('10', '10', '比瑞吉 山楂胃肠道全价全犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/09/a9fa0694f2ac0f6e82e95d7836df31e6.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/09/a9fa0694f2ac0f6e82e95d7836df31e6.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/09/a9fa0694f2ac0f6e82e95d7836df31e6.jpg@!60w-c', '399', '164.00', '110', '32.12', '571', '2.2');
INSERT INTO `05liebiao` VALUES ('11', '11', '比瑞吉俱乐部 天然健康膳食配方 小型全价成犬粮 2KG', 'https://img2.epetbar.com/goods/sales/201907010163654_560329.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/201907010163654_560329.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/201907010163654_560329.jpg@!60w-c', '168', '69.00', '121', '33.12', '582', '3.3');
INSERT INTO `05liebiao` VALUES ('12', '12', '比瑞吉 健康型天然粮 小型犬成犬粮 10kg', 'https://img2.epetbar.com/2018-07/19/11/9adea7392ba5294dcfd3a0d1ec2bf647.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/11/9adea7392ba5294dcfd3a0d1ec2bf647.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/11/9adea7392ba5294dcfd3a0d1ec2bf647.jpg@!60w-c', '1065', '439.00', '132', '34.12', '593', '1.5');
INSERT INTO `05liebiao` VALUES ('13', '13', '比瑞吉俱乐部 健康膳食配方 美毛全期犬粮 2KG', 'https://img2.epetbar.com/2018-07/17/10/8db6d2170b48fb4df04409f2f68a2dcf.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/17/10/8db6d2170b48fb4df04409f2f68a2dcf.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/17/10/8db6d2170b48fb4df04409f2f68a2dcf.jpg@!60w-c', '192', '79.00', '143', '35.12', '164', '2.5');
INSERT INTO `05liebiao` VALUES ('14', '14', '比瑞吉 健康型天然粮 比熊全价成犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/16/1c524fc9dfe55fc59e709c3a6647af75.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/16/1c524fc9dfe55fc59e709c3a6647af75.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/16/1c524fc9dfe55fc59e709c3a6647af75.jpg@!60w-c', '339', '139.00', '154', '36.12', '175', '6.4');
INSERT INTO `05liebiao` VALUES ('15', '15', '比瑞吉俱乐部 天然健康膳食配方 钙奶助长幼犬粮 10kg', 'https://img2.epetbar.com/goods/sales/20190517174957_479522.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190704130509_837980.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190517174957_479522.jpg@!60w-c', '726', '299.00', '165', '37.12', '186', '8.5');
INSERT INTO `05liebiao` VALUES ('16', '16', '比瑞吉 健康型天然粮 小型犬幼犬粮 10kg', 'https://img2.epetbar.com/2018-07/19/11/33132a51d4d5084be7a3afd08ac34979.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/11/33132a51d4d5084be7a3afd08ac34979.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/11/33132a51d4d5084be7a3afd08ac34979.jpg@!60w-c', '1185', '489.00', '176', '38.12', '197', '2.2');
INSERT INTO `05liebiao` VALUES ('17', '17', '比瑞吉 俱乐部全犬种全价成犬粮 12kg', 'https://img2.epetbar.com/2018-07/17/14/2ea58d3b1e63d2b60ab343b171c1d94a.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/201905171819010_811629.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/17/14/2ea58d3b1e63d2b60ab343b171c1d94a.jpg@!60w-c', '795', '329.00', '187', '39.12', '208', '3.3');
INSERT INTO `05liebiao` VALUES ('18', '18', '比瑞吉俱乐部 天然健康膳食配方 泰迪贵宾全价成犬粮 2KG', 'https://img2.epetbar.com/2018-07/17/09/54eb1d6913aefd30a990058bcc04e5f6.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/17/09/54eb1d6913aefd30a990058bcc04e5f6.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/17/09/54eb1d6913aefd30a990058bcc04e5f6.jpg@!60w-c', '180', '75.00', '198', '40.12', '219', '1.5');
INSERT INTO `05liebiao` VALUES ('19', '19', '比瑞吉 俱乐部全犬种全价幼犬粮 2kg', 'https://img2.epetbar.com/goods/sales/20190517181852_816543.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190517181852_816543.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190517181852_816543.jpg@!60w-c', '183', '75.00', '209', '41.12', '230', '2.5');
INSERT INTO `05liebiao` VALUES ('20', '20', '比瑞吉俱乐部 天然健康膳食配方 泰迪贵宾全价幼犬粮 2KG', 'https://img2.epetbar.com/goods/sales/20190517180248_239409.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190517180248_239409.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190517180248_239409.jpg@!60w-c', '192', '79.00', '220', '42.12', '241', '6.4');
INSERT INTO `05liebiao` VALUES ('21', '21', '比瑞吉 俱乐部全犬种全价成犬粮 2kg', 'https://img2.epetbar.com/goods/sales/201905171819010_811629.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/201905171819010_811629.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/201905171819010_811629.jpg@!60w-c', '174', '72.00', '231', '43.12', '252', '8.5');
INSERT INTO `05liebiao` VALUES ('22', '22', '比瑞吉 健康型天然粮大型犬成犬粮 15kg', 'https://img2.epetbar.com/2018-07/19/13/42cacbe8520fa69ecbec19859cf3e301.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/13/42cacbe8520fa69ecbec19859cf3e301.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/13/42cacbe8520fa69ecbec19859cf3e301.jpg@!60w-c', '1377', '569.00', '242', '44.12', '263', '4.3');
INSERT INTO `05liebiao` VALUES ('23', '23', '比瑞吉 健康型天然粮 博美全价成犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/16/d099ad0696ca6ceffdf7b45712afffea.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/16/d099ad0696ca6ceffdf7b45712afffea.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/16/d099ad0696ca6ceffdf7b45712afffea.jpg@!60w-c', '339', '139.00', '253', '34.02', '274', '4.8');
INSERT INTO `05liebiao` VALUES ('24', '24', '比瑞吉 健康型天然粮  小型犬老年全价犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/16/22475895ef44fa233ba133354981fa2d.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/16/22475895ef44fa233ba133354981fa2d.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/16/22475895ef44fa233ba133354981fa2d.jpg@!60w-c', '339', '139.00', '264', '35.02', '285', '7.9');
INSERT INTO `05liebiao` VALUES ('25', '25', '比瑞吉俱乐部 天然健康膳食配方 全价离乳奶糕幼犬粮 2kg', 'https://img2.epetbar.com/goods/sales/20190517180306_384610.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190517180306_384610.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190517180306_384610.jpg@!60w-c', '216', '89.00', '275', '36.02', '296', '4.3');
INSERT INTO `05liebiao` VALUES ('26', '26', '比瑞吉俱乐部 天然健康膳食配方 小型全价幼犬粮 2KG', 'https://img2.epetbar.com/goods/sales/20190517180427_768155.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190517180427_768155.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190517180427_768155.jpg@!60w-c', '174', '72.00', '286', '37.02', '307', '4.8');
INSERT INTO `05liebiao` VALUES ('27', '27', '比瑞吉 健康型天然粮 金毛全价成犬粮 12kg', 'https://img2.epetbar.com/goods/sales/20190517180119_401239.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190517180119_401239.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190517180119_401239.jpg@!60w-c', '1137', '469.00', '297', '38.02', '318', '7.9');
INSERT INTO `05liebiao` VALUES ('28', '28', '比瑞吉 健康型天然粮 萨摩耶全价成犬粮 12kg', 'https://img2.epetbar.com/goods/sales/20190704130851_469126.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190704130851_469126.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190704130851_469126.jpg@!60w-c', '1287', '529.00', '308', '39.02', '329', '2.2');
INSERT INTO `05liebiao` VALUES ('29', '29', '比瑞吉 健康型天然粮 小型犬全价离乳奶糕粮 2kg', 'https://img2.epetbar.com/2018-07/19/15/4643c74e7298298d24dd2c1c0d1f2297.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/20/14/34ee6befca1f136024c6fdb928de5baf.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/15/4643c74e7298298d24dd2c1c0d1f2297.jpg@!60w-c', '321', '132.00', '319', '40.02', '340', '3.3');
INSERT INTO `05liebiao` VALUES ('30', '30', '比瑞吉 健康型天然粮 大型犬幼犬粮 15kg', 'https://img2.epetbar.com/2018-07/19/13/bf75a5722439d2625418fa60c1aaaf0a.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/13/bf75a5722439d2625418fa60c1aaaf0a.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/13/bf75a5722439d2625418fa60c1aaaf0a.jpg@!60w-c', '1467', '609.00', '330', '41.02', '351', '1.5');
INSERT INTO `05liebiao` VALUES ('31', '31', '比瑞吉 丹参心脏全价成犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/10/3ffb74de7be6ee06cc64fa823bcb7012.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/10/3ffb74de7be6ee06cc64fa823bcb7012.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/10/3ffb74de7be6ee06cc64fa823bcb7012.jpg@!60w-c', '399', '164.00', '341', '42.02', '362', '2.5');
INSERT INTO `05liebiao` VALUES ('32', '32', '比瑞吉 健康型天然粮 泰迪贵宾幼犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/16/b1c84e7a4177bdac95f35a0521367b4e.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/16/b1c84e7a4177bdac95f35a0521367b4e.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/16/b1c84e7a4177bdac95f35a0521367b4e.jpg@!60w-c', '387', '159.00', '352', '43.02', '373', '6.4');
INSERT INTO `05liebiao` VALUES ('33', '33', '比瑞吉 新鲜天然粮 全期犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/15/95fce8ce64b71b342ba87af97ae851ba.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/15/95fce8ce64b71b342ba87af97ae851ba.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/15/95fce8ce64b71b342ba87af97ae851ba.jpg@!60w-c', '363', '149.00', '363', '44.02', '384', '8.5');
INSERT INTO `05liebiao` VALUES ('34', '34', '比瑞吉 健康型天然粮 金毛全价幼犬粮 12kg', 'https://img2.epetbar.com/goods/sales/20190517180137_589089.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190517180137_589089.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190517180137_589089.jpg@!60w-c', '1347', '559.00', '999', '45.02', '395', '4.3');
INSERT INTO `05liebiao` VALUES ('35', '35', '比瑞吉 健康型天然粮 薏苡仁皮肤全价全犬粮 2kg', 'https://img2.epetbar.com/2018-07/18/13/68a8e9fb927990512331030a4ce6c7a4.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/18/13/68a8e9fb927990512331030a4ce6c7a4.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/18/13/68a8e9fb927990512331030a4ce6c7a4.jpg@!60w-c', '399', '164.00', '969', '46.02', '406', '4.8');
INSERT INTO `05liebiao` VALUES ('36', '36', '比瑞吉俱乐部 天然健康膳食配方 大中型老年犬粮 12KG', 'https://img2.epetbar.com/2018-07/17/14/02a8777e3178fd6b288b544b715d7dd4.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/17/14/02a8777e3178fd6b288b544b715d7dd4.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/17/14/02a8777e3178fd6b288b544b715d7dd4.jpg@!60w-c', '864', '355.00', '939', '47.02', '417', '7.9');
INSERT INTO `05liebiao` VALUES ('37', '37', '比瑞吉 健康型天然粮 室内小型犬全价幼犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/15/9cabdb59f5a5ea8754bd4dd07e47bf2d.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/15/9cabdb59f5a5ea8754bd4dd07e47bf2d.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/15/9cabdb59f5a5ea8754bd4dd07e47bf2d.jpg@!60w-c', '300', '125.00', '909', '48.02', '428', '1.5');
INSERT INTO `05liebiao` VALUES ('38', '38', '比瑞吉 健康型天然粮 萨摩耶全价幼犬粮 12kg', 'https://img2.epetbar.com/2018-07/19/16/27b0bb12460c85cf51c19eca49c9604c.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/16/27b0bb12460c85cf51c19eca49c9604c.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/16/27b0bb12460c85cf51c19eca49c9604c.jpg@!60w-c', '1347', '559.00', '879', '49.02', '439', '2.5');
INSERT INTO `05liebiao` VALUES ('39', '39', '比瑞吉 黄芪弱体质全价全犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/09/54dfbdb1e5e5163fa2e6245766ff8cfd.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/09/54dfbdb1e5e5163fa2e6245766ff8cfd.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/09/54dfbdb1e5e5163fa2e6245766ff8cfd.jpg@!60w-c', '399', '164.00', '849', '50.02', '450', '6.4');
INSERT INTO `05liebiao` VALUES ('40', '40', '比瑞吉 健康型天然粮 全价小型犬奶糕离乳犬粮 12kg', 'https://img2.epetbar.com/2018-07/20/14/34ee6befca1f136024c6fdb928de5baf.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/20/14/34ee6befca1f136024c6fdb928de5baf.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/20/14/34ee6befca1f136024c6fdb928de5baf.jpg@!60w-c', '1497', '619.00', '819', '51.02', '461', '8.5');
INSERT INTO `05liebiao` VALUES ('41', '41', '比瑞吉 健康型天然粮 全犬种全价幼犬粮 12kg', 'https://img2.epetbar.com/2018-07/19/15/1961ade475bc245642a85bdacf850288.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/15/1961ade475bc245642a85bdacf850288.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/15/1961ade475bc245642a85bdacf850288.jpg@!60w-c', '1287', '529.00', '789', '52.02', '472', '4.3');
INSERT INTO `05liebiao` VALUES ('42', '42', '比瑞吉 健康型天然粮 全犬种全价成犬粮 12kg', 'https://img2.epetbar.com/goods/sales/20190517180153_176850.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/20190517180153_176850.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/20190517180153_176850.jpg@!60w-c', '1155', '479.00', '759', '53.02', '483', '4.8');
INSERT INTO `05liebiao` VALUES ('43', '43', '比瑞吉 健康型天然粮 全价大型犬奶糕离乳犬粮 12kg', 'https://img2.epetbar.com/2018-07/19/16/073f1f9211ca02c1bfc7ab8eb580c781.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/16/073f1f9211ca02c1bfc7ab8eb580c781.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/16/073f1f9211ca02c1bfc7ab8eb580c781.jpg@!60w-c', '1497', '619.00', '729', '54.02', '494', '7.9');
INSERT INTO `05liebiao` VALUES ('44', '44', '比瑞吉 健康型天然粮 拉布拉多全价成犬粮 12kg', 'https://img2.epetbar.com/2018-07/19/15/116d29bbcdcf115ac56698291e5acb21.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/15/116d29bbcdcf115ac56698291e5acb21.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/15/116d29bbcdcf115ac56698291e5acb21.jpg@!60w-c', '1287', '529.00', '699', '55.02', '505', '4.3');
INSERT INTO `05liebiao` VALUES ('45', '45', '比瑞吉 健康型天然粮 小型犬全价幼犬粮 1.5kg', 'https://img2.epetbar.com/2018-07/19/11/980ef7338e9d1e3506b602f9a7bdb066.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/11/33132a51d4d5084be7a3afd08ac34979.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/11/980ef7338e9d1e3506b602f9a7bdb066.jpg@!60w-c', '267', '109.00', '669', '56.02', '516', '4.8');
INSERT INTO `05liebiao` VALUES ('46', '46', '比瑞吉 健康型天然粮 大中型犬全价成犬粮 12kg', 'https://img2.epetbar.com/2018-07/19/14/514380c37fe3b242c4a685e2d191a6d8.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/14/514380c37fe3b242c4a685e2d191a6d8.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/14/514380c37fe3b242c4a685e2d191a6d8.jpg@!60w-c', '1155', '479.00', '639', '57.02', '527', '7.9');
INSERT INTO `05liebiao` VALUES ('47', '47', '比瑞吉 健康型天然粮 室内小型犬全价成犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/15/4b7481c57e8c3dcea3f522cfa19b26b9.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/15/4b7481c57e8c3dcea3f522cfa19b26b9.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/15/4b7481c57e8c3dcea3f522cfa19b26b9.jpg@!60w-c', '279.7', '115.00', '609', '58.02', '538', '2.2');
INSERT INTO `05liebiao` VALUES ('48', '48', '比瑞吉 健康型天然粮 大中型全价幼犬粮 12kg', 'https://img2.epetbar.com/2018-07/20/14/5a945c5e255dc0f694f2d95c226413c9.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/20/14/5a945c5e255dc0f694f2d95c226413c9.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/20/14/5a945c5e255dc0f694f2d95c226413c9.jpg@!60w-c', '1287', '529.00', '579', '59.02', '549', '3.3');
INSERT INTO `05liebiao` VALUES ('49', '49', '比瑞吉 健康型天然粮 大型犬全价离乳犬奶糕粮 2kg', 'https://img2.epetbar.com/2018-07/19/15/54e4c76632a0264e8f4c8f978914632d.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/16/073f1f9211ca02c1bfc7ab8eb580c781.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/15/54e4c76632a0264e8f4c8f978914632d.jpg@!60w-c', '321', '132.00', '549', '60.02', '560', '1.5');
INSERT INTO `05liebiao` VALUES ('50', '50', '比瑞吉俱乐部 天然健康膳食配方 小型全价老年犬粮 2KG', 'https://img2.epetbar.com/2018-07/17/10/dd80a5432f126cc844b36fe9f3032b96.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/17/10/dd80a5432f126cc844b36fe9f3032b96.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/17/10/dd80a5432f126cc844b36fe9f3032b96.jpg@!60w-c', '192', '79.00', '519', '61.02', '571', '2.5');
INSERT INTO `05liebiao` VALUES ('51', '51', '比瑞吉 健康型天然粮 边牧全价成犬粮 12kg', 'https://img2.epetbar.com/goods/sales/201907010163627_474579.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/201907010163627_474579.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/201907010163627_474579.jpg@!60w-c', '1287', '529.00', '489', '62.02', '582', '6.4');
INSERT INTO `05liebiao` VALUES ('52', '52', '比瑞吉 菟丝子肾脏全价成犬粮 2kg', 'https://img2.epetbar.com/goods/sales/201907010163715_859866.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/201907010163715_859866.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/201907010163715_859866.jpg@!60w-c', '399', '164.00', '459', '63.02', '593', '8.5');
INSERT INTO `05liebiao` VALUES ('53', '53', '比瑞吉 健康型天然粮 边牧幼犬粮 12kg', 'https://img2.epetbar.com/2019-01/02/10/f09eb2af1d477a1dae4fc9e8ffb46ffe.jpg@!200w-c', 'https://img2.epetbar.com/2019-01/02/10/f09eb2af1d477a1dae4fc9e8ffb46ffe.jpg@!60w-c', 'https://img2.epetbar.com/2019-01/02/10/f09eb2af1d477a1dae4fc9e8ffb46ffe.jpg@!60w-c', '1347', '559.00', '429', '64.02', '604', '4.3');
INSERT INTO `05liebiao` VALUES ('54', '54', '比瑞吉 无谷生鲜山羊肉蔓越莓全犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/11/18553d17ba8da47b0717bf06f8ab9871.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/11/18553d17ba8da47b0717bf06f8ab9871.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/11/18553d17ba8da47b0717bf06f8ab9871.jpg@!60w-c', '430', '179.00', '399', '65.02', '615', '4.8');
INSERT INTO `05liebiao` VALUES ('55', '55', '比瑞吉 无谷生鲜鸭肉雪莲果全犬粮 2kg', 'https://img2.epetbar.com/2018-07/19/11/49ab5ac662ef52b8231d978ff58c656e.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/11/49ab5ac662ef52b8231d978ff58c656e.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/11/49ab5ac662ef52b8231d978ff58c656e.jpg@!60w-c', '430', '179.00', '369', '66.02', '626', '7.9');
INSERT INTO `05liebiao` VALUES ('56', '56', '比瑞吉 健康型天然粮 迷你雪纳瑞全价成犬粮 2kg', 'https://img2.epetbar.com/goods/sales/201907010163600_109951.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/201907010163600_109951.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/201907010163600_109951.jpg@!60w-c', '339', '139.00', '339', '67.02', '23', '1.5');
INSERT INTO `05liebiao` VALUES ('57', '57', '比瑞吉 健康型天然粮 拉布拉多全价幼犬粮 12kg', 'https://img2.epetbar.com/2018-07/19/15/79e44a36c11b2ee4325d435d867d36d5.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/19/15/79e44a36c11b2ee4325d435d867d36d5.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/19/15/79e44a36c11b2ee4325d435d867d36d5.jpg@!60w-c', '1347', '559.00', '309', '68.02', '44', '2.5');
INSERT INTO `05liebiao` VALUES ('58', '58', '比瑞吉 健康型天然粮 大中型全价老年犬粮 12kg', 'https://img2.epetbar.com/2018-07/20/14/a528b111f9b2f088d1beda9a496f1e15.jpg@!200w-c', 'https://img2.epetbar.com/2018-07/20/14/a528b111f9b2f088d1beda9a496f1e15.jpg@!60w-c', 'https://img2.epetbar.com/2018-07/20/14/a528b111f9b2f088d1beda9a496f1e15.jpg@!60w-c', '1197', '499.00', '279', '69.02', '33', '6.4');
INSERT INTO `05liebiao` VALUES ('59', '59', '比瑞吉 健康型天然粮 鱼油靓小型全价全期犬粮 2kg', 'https://img2.epetbar.com/goods/sales/201907010163539_515439.jpg@!200w-c', 'https://img2.epetbar.com/goods/sales/201907010163539_515439.jpg@!60w-c', 'https://img2.epetbar.com/goods/sales/201907010163539_515439.jpg@!60w-c', '363', '149.00', '249', '70.02', '22', '8.5');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `gid` int(11) NOT NULL DEFAULT '0',
  `phone` bigint(255) unsigned NOT NULL DEFAULT '0',
  `title` varchar(2000) DEFAULT NULL,
  `xianjia` float(255,2) DEFAULT '0.00',
  `counts` int(20) DEFAULT '0',
  `img` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`gid`,`phone`),
  KEY `uid` (`phone`),
  KEY `support` (`counts`)
) ENGINE=MyISAM AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `phone` char(30) NOT NULL,
  `password` char(32) DEFAULT NULL,
  `gid` int(20) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `username` (`phone`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('54', '15777716150', '12345', null);
SET FOREIGN_KEY_CHECKS=1;
