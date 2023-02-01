/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : psystem

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 01/02/2023 12:52:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int NOT NULL,
  `uname` varchar(255) NOT NULL,
  `upassword` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of login
-- ----------------------------
BEGIN;
INSERT INTO `login` (`id`, `uname`, `upassword`) VALUES (1, 'test', 'test');
COMMIT;

-- ----------------------------
-- Table structure for precord
-- ----------------------------
DROP TABLE IF EXISTS `precord`;
CREATE TABLE `precord` (
  `id` int NOT NULL,
  `symptom` varchar(255) NOT NULL,
  `patientdata` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of precord
-- ----------------------------
BEGIN;
INSERT INTO `precord` (`id`, `symptom`, `patientdata`) VALUES (1, 'temp', 39);
INSERT INTO `precord` (`id`, `symptom`, `patientdata`) VALUES (2, 'bpressure', 120);
INSERT INTO `precord` (`id`, `symptom`, `patientdata`) VALUES (3, 'bsugar', 110);
INSERT INTO `precord` (`id`, `symptom`, `patientdata`) VALUES (4, 'cholestrol', 5);
INSERT INTO `precord` (`id`, `symptom`, `patientdata`) VALUES (5, 'heartb', 80);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
