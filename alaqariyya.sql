-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 06 jan. 2026 à 13:47
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `alaqariyya`
--

-- --------------------------------------------------------

--
-- Structure de la table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name_ar` varchar(120) NOT NULL,
  `name_fr` varchar(120) NOT NULL,
  `slug` varchar(140) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cities`
--

INSERT INTO `cities` (`id`, `name_ar`, `name_fr`, `slug`, `is_active`, `created_at`) VALUES
(1, 'الناظور', 'Nador', 'nador', 1, '2025-12-20 11:29:26'),
(2, 'بني أنصار', 'Beni Ansar', 'beni-ansar', 1, '2025-12-20 11:29:26'),
(3, 'الحسيمة', 'Al Hoceima', 'al-hoceima', 1, '2025-12-20 11:29:26'),
(4, 'وجدة', 'Oujda', 'oujda', 1, '2025-12-20 11:29:26'),
(12, 'اكادير', 'agadir', 'agadir', 1, '2025-12-23 10:57:12');

-- --------------------------------------------------------

--
-- Structure de la table `clickcount_stats`
--

CREATE TABLE `clickcount_stats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `click_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clickcount_stats`
--

INSERT INTO `clickcount_stats` (`id`, `property_id`, `click_time`) VALUES
(820, 271, '2025-06-04 14:58:14'),
(821, 270, '2025-06-04 14:58:26'),
(822, 271, '2025-06-04 14:58:40'),
(823, 271, '2025-06-04 15:03:49'),
(824, 271, '2025-06-04 15:28:02'),
(825, 271, '2025-06-04 16:42:32'),
(826, 270, '2025-06-04 16:42:42'),
(827, 271, '2025-06-05 09:55:28'),
(828, 271, '2025-06-05 10:03:47'),
(829, 270, '2025-06-05 10:12:45'),
(830, 273, '2025-06-05 10:41:46'),
(831, 271, '2025-06-05 10:56:17'),
(833, 274, '2025-06-05 11:03:29'),
(834, 274, '2025-06-05 11:32:39'),
(835, 279, '2025-06-05 14:32:05'),
(836, 274, '2025-06-05 14:32:17'),
(837, 274, '2025-06-05 14:32:21'),
(839, 280, '2025-06-05 14:38:34'),
(840, 274, '2025-06-05 14:38:45'),
(841, 280, '2025-06-05 14:42:08'),
(843, 280, '2025-06-05 14:42:16'),
(844, 280, '2025-06-05 14:51:25'),
(845, 276, '2025-06-06 15:59:19'),
(846, 276, '2025-06-06 16:05:43'),
(847, 282, '2025-06-06 16:37:57'),
(848, 282, '2025-06-06 16:40:08'),
(849, 283, '2025-06-06 16:40:14'),
(850, 284, '2025-06-06 16:40:21'),
(851, 285, '2025-06-06 16:40:27'),
(852, 286, '2025-06-06 16:47:38'),
(853, 284, '2025-06-06 16:48:16'),
(854, 286, '2025-06-06 16:48:18'),
(857, 270, '2025-06-06 16:49:47'),
(858, 283, '2025-06-06 16:57:09'),
(859, 275, '2025-06-06 16:57:24'),
(860, 273, '2025-06-06 16:57:51'),
(861, 280, '2025-06-06 16:59:17'),
(863, 275, '2025-06-06 16:59:36'),
(864, 286, '2025-06-06 16:59:59'),
(865, 284, '2025-06-06 17:00:27'),
(866, 287, '2025-06-10 09:49:39'),
(867, 286, '2025-06-10 09:49:51'),
(868, 284, '2025-06-10 09:49:56'),
(869, 282, '2025-06-10 09:50:08'),
(870, 283, '2025-06-10 09:50:15'),
(871, 285, '2025-06-10 09:50:25'),
(872, 271, '2025-06-10 10:08:22'),
(874, 286, '2025-06-10 10:21:49'),
(875, 275, '2025-06-10 10:21:57'),
(876, 288, '2025-06-10 11:37:52'),
(877, 274, '2025-06-10 11:40:21'),
(878, 280, '2025-12-09 14:01:17'),
(879, 273, '2025-12-13 12:04:50'),
(880, 280, '2025-12-15 09:52:59'),
(881, 280, '2025-12-15 11:56:44'),
(882, 280, '2025-12-15 12:12:56'),
(883, 280, '2025-12-15 12:13:47'),
(884, 280, '2025-12-15 12:15:15'),
(885, 280, '2025-12-15 12:15:25'),
(886, 280, '2025-12-15 12:25:13'),
(887, 280, '2025-12-15 12:25:29'),
(888, 280, '2025-12-15 12:37:05'),
(889, 280, '2025-12-15 12:37:50'),
(890, 284, '2025-12-15 12:38:40'),
(891, 284, '2025-12-15 12:38:54'),
(892, 284, '2025-12-15 12:40:35'),
(893, 284, '2025-12-15 12:40:49'),
(894, 284, '2025-12-15 13:09:07'),
(895, 290, '2025-12-16 10:31:33'),
(896, 290, '2025-12-16 10:31:47'),
(897, 290, '2025-12-16 11:11:30'),
(898, 290, '2025-12-16 11:11:46'),
(899, 290, '2025-12-16 11:12:19'),
(900, 290, '2025-12-16 11:12:37'),
(901, 291, '2025-12-16 11:32:45'),
(902, 290, '2025-12-16 11:37:56'),
(903, 292, '2025-12-16 11:37:59'),
(904, 290, '2025-12-16 11:40:02'),
(905, 291, '2025-12-16 11:50:51'),
(906, 290, '2025-12-16 11:51:14'),
(907, 290, '2025-12-16 11:51:32'),
(908, 293, '2025-12-17 10:38:20'),
(909, 292, '2025-12-17 11:08:14'),
(910, 290, '2025-12-17 11:08:26'),
(911, 292, '2025-12-17 11:10:48'),
(912, 291, '2025-12-17 11:10:52'),
(913, 295, '2025-12-17 11:24:40'),
(914, 295, '2025-12-17 11:24:54'),
(915, 295, '2025-12-17 11:25:13'),
(916, 292, '2025-12-17 11:27:03'),
(917, 292, '2025-12-17 11:27:07'),
(918, 291, '2025-12-17 11:27:09'),
(919, 291, '2025-12-17 11:27:48'),
(920, 295, '2025-12-17 11:27:59'),
(921, 291, '2025-12-17 11:28:09'),
(922, 293, '2025-12-17 11:28:15'),
(923, 292, '2025-12-17 11:28:16'),
(924, 295, '2025-12-17 11:33:04'),
(925, 290, '2025-12-17 11:33:26'),
(926, 295, '2025-12-17 11:39:50'),
(927, 295, '2025-12-17 11:40:04'),
(928, 291, '2025-12-17 11:43:30'),
(929, 293, '2025-12-17 11:43:32'),
(930, 290, '2025-12-17 11:43:34'),
(931, 290, '2025-12-17 11:43:37'),
(932, 291, '2025-12-17 11:43:39'),
(933, 292, '2025-12-17 11:43:43'),
(934, 292, '2025-12-17 11:43:46'),
(935, 292, '2025-12-17 11:45:21'),
(936, 292, '2025-12-17 12:07:33'),
(937, 295, '2025-12-17 12:07:53'),
(938, 295, '2025-12-17 12:08:01'),
(939, 290, '2025-12-17 12:08:29'),
(940, 295, '2025-12-17 12:11:42'),
(941, 290, '2025-12-17 12:12:07'),
(942, 295, '2025-12-17 12:14:45'),
(943, 292, '2025-12-17 12:15:28'),
(944, 292, '2025-12-17 12:18:15'),
(945, 293, '2025-12-17 12:18:18'),
(946, 295, '2025-12-17 12:18:30'),
(947, 292, '2025-12-17 12:21:35'),
(948, 289, '2025-12-17 13:12:12'),
(949, 295, '2025-12-17 13:12:52'),
(950, 274, '2025-12-17 13:21:57'),
(951, 296, '2025-12-17 13:22:57'),
(952, 274, '2025-12-17 13:23:06'),
(953, 292, '2025-12-17 13:48:27'),
(954, 293, '2025-12-17 13:48:30'),
(955, 294, '2025-12-17 13:48:38'),
(956, 289, '2025-12-17 13:48:46'),
(957, 294, '2025-12-17 13:49:27'),
(958, 296, '2025-12-17 13:50:17'),
(959, 274, '2025-12-17 13:50:22'),
(960, 292, '2025-12-17 14:20:21'),
(961, 292, '2025-12-17 14:39:25'),
(962, 295, '2025-12-17 14:39:31'),
(963, 292, '2025-12-17 14:45:37'),
(964, 293, '2025-12-17 14:51:42'),
(965, 292, '2025-12-17 14:51:53'),
(966, 295, '2025-12-17 14:51:57'),
(967, 293, '2025-12-17 14:52:00'),
(968, 292, '2025-12-17 15:04:07'),
(969, 295, '2025-12-17 15:11:16'),
(970, 295, '2025-12-17 15:12:35'),
(971, 291, '2025-12-17 15:15:05'),
(972, 292, '2025-12-17 15:18:20'),
(973, 295, '2025-12-17 15:18:34'),
(974, 292, '2025-12-17 15:19:18'),
(975, 291, '2025-12-17 15:23:45'),
(976, 295, '2025-12-18 10:31:00'),
(977, 293, '2025-12-18 11:26:21'),
(978, 295, '2025-12-18 11:51:47'),
(979, 295, '2025-12-18 11:55:55'),
(980, 297, '2025-12-18 12:03:14'),
(981, 297, '2025-12-18 12:04:11'),
(982, 293, '2025-12-18 12:04:58'),
(983, 297, '2025-12-18 12:20:03'),
(984, 295, '2025-12-18 12:20:38'),
(985, 296, '2025-12-18 12:40:24'),
(986, 296, '2025-12-18 12:40:33'),
(987, 274, '2025-12-18 12:40:39'),
(988, 292, '2025-12-18 14:31:14'),
(989, 297, '2025-12-18 14:46:04'),
(990, 295, '2025-12-18 14:46:18'),
(991, 297, '2025-12-18 14:46:38'),
(992, 296, '2025-12-18 14:47:17'),
(993, 274, '2025-12-18 14:47:23'),
(994, 297, '2025-12-18 14:47:34'),
(995, 295, '2025-12-18 15:17:59'),
(996, 292, '2025-12-18 15:18:45'),
(997, 297, '2025-12-18 15:19:33'),
(998, 295, '2025-12-18 15:19:40'),
(999, 298, '2025-12-18 15:20:00'),
(1000, 290, '2025-12-19 11:39:01'),
(1001, 295, '2025-12-19 11:39:15'),
(1002, 280, '2025-12-19 11:44:20'),
(1003, 297, '2025-12-19 15:16:28'),
(1004, 293, '2025-12-19 15:17:15'),
(1005, 297, '2025-12-19 16:04:29'),
(1006, 297, '2025-12-20 10:23:46'),
(1007, 299, '2025-12-20 12:25:48'),
(1008, 299, '2025-12-20 12:26:07'),
(1009, 300, '2025-12-20 12:29:01'),
(1010, 301, '2025-12-20 12:46:20'),
(1011, 301, '2025-12-20 12:46:29'),
(1012, 301, '2025-12-20 12:46:44'),
(1013, 302, '2025-12-20 13:05:20'),
(1014, 300, '2025-12-20 14:06:07'),
(1015, 300, '2025-12-20 14:06:24'),
(1016, 297, '2025-12-20 14:16:10'),
(1017, 297, '2025-12-20 14:16:32'),
(1018, 295, '2025-12-20 14:18:19'),
(1019, 295, '2025-12-20 14:19:34'),
(1020, 303, '2025-12-20 14:19:42'),
(1021, 301, '2025-12-20 14:19:51'),
(1022, 299, '2025-12-20 14:31:27'),
(1023, 301, '2025-12-20 14:31:56'),
(1024, 297, '2025-12-20 14:32:06'),
(1025, 297, '2025-12-20 14:34:59'),
(1026, 297, '2025-12-20 14:43:02'),
(1027, 297, '2025-12-20 14:43:35'),
(1028, 297, '2025-12-20 14:43:49'),
(1029, 302, '2025-12-20 15:04:56'),
(1030, 295, '2025-12-20 15:05:06'),
(1031, 301, '2025-12-20 15:05:30'),
(1032, 304, '2025-12-20 15:46:44'),
(1033, 304, '2025-12-20 15:46:50'),
(1034, 302, '2025-12-22 10:45:36'),
(1035, 307, '2025-12-22 11:57:07'),
(1036, 294, '2025-12-22 14:06:26'),
(1037, 308, '2025-12-22 15:24:05'),
(1038, 293, '2025-12-22 15:24:37'),
(1039, 302, '2025-12-22 15:24:45'),
(1040, 290, '2025-12-22 15:25:01'),
(1041, 297, '2025-12-22 15:25:06'),
(1042, 301, '2025-12-22 15:25:19'),
(1043, 306, '2025-12-22 15:49:28'),
(1044, 295, '2025-12-22 15:49:31'),
(1045, 300, '2025-12-22 15:49:41'),
(1046, 300, '2025-12-22 15:49:45'),
(1047, 308, '2025-12-23 10:13:17'),
(1048, 306, '2025-12-23 10:17:07'),
(1049, 299, '2025-12-23 10:17:13'),
(1050, 301, '2025-12-23 10:18:45'),
(1051, 302, '2025-12-23 10:18:52'),
(1052, 308, '2025-12-23 10:18:57'),
(1053, 301, '2025-12-23 10:19:04'),
(1054, 299, '2025-12-23 10:19:17'),
(1055, 297, '2025-12-23 10:19:20'),
(1056, 302, '2025-12-23 10:19:22'),
(1057, 306, '2025-12-23 10:19:49'),
(1058, 308, '2025-12-23 10:19:54'),
(1059, 308, '2025-12-23 10:20:00'),
(1060, 306, '2025-12-23 10:21:02'),
(1061, 302, '2025-12-23 10:21:07'),
(1062, 308, '2025-12-23 10:34:54'),
(1063, 292, '2025-12-23 10:35:09'),
(1064, 301, '2025-12-23 10:36:08'),
(1065, 307, '2025-12-23 10:36:16'),
(1066, 295, '2025-12-23 10:56:01'),
(1067, 280, '2025-12-23 11:03:36'),
(1068, 307, '2025-12-23 11:03:41'),
(1069, 295, '2025-12-23 11:03:46'),
(1070, 297, '2025-12-23 14:14:36'),
(1071, 301, '2025-12-23 14:14:38'),
(1072, 297, '2025-12-23 14:14:42'),
(1073, 301, '2025-12-24 13:32:44'),
(1074, 293, '2025-12-24 15:19:13'),
(1075, 308, '2025-12-24 15:52:54'),
(1076, 297, '2025-12-25 13:19:27'),
(1077, 303, '2025-12-25 13:19:39'),
(1078, 295, '2025-12-25 13:19:55'),
(1079, 304, '2025-12-25 13:25:23'),
(1080, 304, '2025-12-25 13:40:50'),
(1081, 307, '2025-12-25 14:17:47'),
(1082, 307, '2025-12-25 14:17:52'),
(1083, 300, '2025-12-25 14:20:20'),
(1084, 295, '2025-12-25 14:23:30'),
(1085, 306, '2025-12-25 14:23:37'),
(1086, 295, '2025-12-25 14:35:00'),
(1087, 295, '2025-12-25 14:40:58'),
(1088, 297, '2025-12-25 14:41:10'),
(1089, 295, '2025-12-25 14:41:34'),
(1090, 310, '2025-12-25 15:20:41'),
(1091, 307, '2025-12-25 16:08:06'),
(1092, 310, '2025-12-25 16:08:12'),
(1093, 309, '2025-12-25 16:14:03'),
(1094, 280, '2025-12-26 10:31:20'),
(1095, 300, '2025-12-26 10:31:34'),
(1096, 305, '2025-12-27 12:40:30'),
(1097, 310, '2025-12-27 13:07:25'),
(1098, 311, '2025-12-29 12:43:33'),
(1099, 307, '2025-12-29 12:58:18'),
(1100, 311, '2025-12-29 12:58:20'),
(1101, 307, '2025-12-29 12:58:22'),
(1102, 311, '2025-12-29 12:58:49'),
(1103, 312, '2025-12-29 13:14:35'),
(1104, 312, '2025-12-29 13:16:00'),
(1105, 312, '2025-12-29 13:16:05'),
(1106, 313, '2025-12-29 13:16:08'),
(1107, 313, '2025-12-29 13:17:31'),
(1108, 312, '2025-12-29 13:17:32'),
(1109, 312, '2025-12-29 13:19:02'),
(1110, 312, '2025-12-29 13:19:04'),
(1111, 313, '2025-12-29 13:19:06'),
(1112, 313, '2025-12-29 13:20:44'),
(1113, 313, '2025-12-29 13:22:14'),
(1114, 312, '2025-12-29 13:22:15'),
(1115, 313, '2025-12-29 13:23:07'),
(1116, 313, '2025-12-29 13:32:18'),
(1117, 312, '2025-12-29 13:32:21'),
(1118, 313, '2025-12-29 13:32:44'),
(1119, 312, '2025-12-29 13:36:02'),
(1120, 300, '2025-12-29 13:36:46'),
(1121, 313, '2025-12-29 13:47:10'),
(1122, 313, '2025-12-29 14:07:59'),
(1123, 313, '2025-12-29 14:08:03'),
(1124, 312, '2025-12-29 14:48:14'),
(1125, 312, '2025-12-29 14:48:16'),
(1126, 313, '2025-12-29 14:48:18'),
(1127, 314, '2025-12-29 14:49:15'),
(1128, 314, '2025-12-29 14:50:03'),
(1129, 314, '2025-12-29 14:50:10'),
(1130, 315, '2025-12-29 14:51:18'),
(1131, 315, '2025-12-29 14:52:02'),
(1132, 314, '2025-12-29 14:52:56'),
(1133, 314, '2025-12-29 14:53:18'),
(1134, 315, '2025-12-29 14:53:54'),
(1135, 314, '2025-12-29 14:54:09'),
(1136, 315, '2025-12-29 14:55:38'),
(1137, 314, '2025-12-29 15:09:44'),
(1138, 315, '2025-12-29 15:09:49'),
(1139, 315, '2025-12-29 15:10:14'),
(1140, 315, '2025-12-29 15:11:23'),
(1141, 315, '2025-12-29 15:11:49'),
(1142, 314, '2025-12-29 15:12:17'),
(1143, 314, '2025-12-29 15:13:13'),
(1144, 315, '2025-12-29 15:14:15'),
(1145, 314, '2025-12-29 15:16:18'),
(1146, 315, '2025-12-29 15:16:24'),
(1147, 309, '2025-12-29 15:16:49'),
(1148, 311, '2025-12-29 15:16:54'),
(1149, 310, '2025-12-29 15:17:11'),
(1150, 300, '2025-12-29 15:22:51'),
(1151, 293, '2025-12-29 15:22:59'),
(1152, 311, '2025-12-29 15:23:03'),
(1153, 315, '2025-12-29 15:23:32'),
(1154, 313, '2025-12-29 15:24:43'),
(1155, 307, '2025-12-29 15:24:57'),
(1156, 293, '2025-12-29 15:25:04'),
(1157, 306, '2025-12-29 15:25:19'),
(1158, 311, '2025-12-29 15:25:26'),
(1159, 310, '2025-12-29 15:25:44'),
(1160, 303, '2025-12-29 15:25:49'),
(1161, 314, '2025-12-29 15:25:59'),
(1162, 308, '2025-12-29 15:27:02'),
(1163, 312, '2025-12-29 15:27:23'),
(1164, 317, '2025-12-29 15:30:02'),
(1165, 316, '2025-12-29 15:30:17'),
(1166, 317, '2025-12-29 15:34:14'),
(1167, 316, '2025-12-29 15:34:26'),
(1168, 308, '2025-12-29 15:35:06'),
(1169, 303, '2025-12-29 15:35:17'),
(1170, 312, '2025-12-29 15:35:22'),
(1171, 292, '2025-12-29 15:35:35'),
(1172, 310, '2025-12-29 15:54:00'),
(1173, 307, '2025-12-29 15:54:06'),
(1174, 313, '2025-12-29 15:54:11'),
(1175, 292, '2025-12-29 15:54:18'),
(1176, 315, '2025-12-29 15:54:22'),
(1177, 293, '2025-12-29 15:54:38'),
(1178, 314, '2025-12-29 15:54:49'),
(1179, 318, '2025-12-29 16:05:08'),
(1180, 318, '2025-12-29 16:05:27'),
(1181, 319, '2025-12-30 14:10:16'),
(1182, 295, '2025-12-30 15:16:10'),
(1183, 318, '2025-12-30 15:16:18');

-- --------------------------------------------------------

--
-- Structure de la table `contact_submissions`
--

CREATE TABLE `contact_submissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact_submissions`
--

INSERT INTO `contact_submissions` (`id`, `name`, `email`, `phone`, `subject`, `message`, `created_at`) VALUES
(25, 'vv', 'zzzzz@zzzzz.com', '0621645456', 'vv', 'vv', '2025-12-13 10:29:57'),
(26, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fdsd', 'fsd', '2025-12-17 14:22:59'),
(27, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fdsd', 'fsd', '2025-12-17 14:23:53'),
(29, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fsd', 'fdsffds', '2025-12-17 14:24:12'),
(30, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fdsd', 'fd', '2025-12-17 14:24:30'),
(31, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fdsd', 'fds', '2025-12-17 14:24:34'),
(32, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fdsd', 'fdsf', '2025-12-17 14:24:37'),
(33, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fdsd', 'sfdfds', '2025-12-17 14:24:41'),
(34, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fds', 'fsd', '2025-12-17 14:24:47'),
(35, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fdsd', 'fds', '2025-12-17 14:24:51'),
(36, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'fdsd', 'sfdfsd', '2025-12-17 14:24:54'),
(37, 'zzzzz zzzzz', 'zzzzz@zzzzz.com', '0621645456', 'sfd', 'fdsf', '2025-12-17 14:24:59');

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `title_fr` varchar(255) DEFAULT NULL,
  `title_es` varchar(255) DEFAULT NULL,
  `title_de` varchar(255) DEFAULT NULL,
  `title_nl` varchar(255) DEFAULT NULL,
  `content_ar` longtext DEFAULT NULL,
  `content_en` longtext DEFAULT NULL,
  `content_fr` longtext DEFAULT NULL,
  `content_es` longtext DEFAULT NULL,
  `content_de` longtext DEFAULT NULL,
  `content_nl` longtext DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `category` varchar(100) DEFAULT NULL,
  `youtube_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `title_ar`, `title_en`, `title_fr`, `title_es`, `title_de`, `title_nl`, `content_ar`, `content_en`, `content_fr`, `content_es`, `content_de`, `content_nl`, `image_url`, `published_at`, `category`, `youtube_url`) VALUES
(40, 'كيف خسر أسطورة الملاكمة مايك تايسون أمام مبتدئ عشريني؟', 'How did the boxing legend Mike Tyson lose in front of a twentieth beginner?', 'Comment la légende de la boxe Mike Tyson a-t-elle perdu devant un vingtième débutant?', '¿Cómo perdió la leyenda del boxeo Mike Tyson frente a un principiante vigésimo?', 'Wie hat die Boxlegende Mike Tyson vor einem zwanzigsten Anfänger verloren?', 'Hoe verloor de bokslegende Mike Tyson voor een twintigste beginner?', 'ترك صانع المحتوى الذي تحول إلى ملاكم، جيك بول، وصمة عار دائمة على إرث الملاكم وبطل الوزن الثقيل لمرتين مايك تايسون، بعد تحقيقه فوزاً في مباراة وصفت بالباهتة، أمام 70 ألف مشجع في تكساس، ممن أصابتهم خيبة الأمل على إثر النتيجة، كذلك أمام الملايين ممن شاهدوا المباراة المثيرة للجدل على شبكة نتفليكس المعروفة.\r\n\r\nبدا تايسون وكأنه ظلاً لشخصيته القديمة، كما هو المتوقع من رجل يبلغ من العمر 58 عاماً ولم ينافس على المستوى الاحترافي منذ 19 عاماً.\r\n\r\nأما بول، الذي يبلغ 27 عاماً، فعلى الرغم من أنه مبتدئ في الملاكمة إلا أنه رياضي للغاية، وعمره صغير جدا بالنسبة لتايسون، فقد أبقى خصمه على مسافة بعيدة، وسدد لكمات دقيقة في نزال من ثماني جولات مدة كل منها دقيقتين، فيما بدا تايسون بطيئاً وخاملاً.\r\n\r\nحصل تايسون على استقبال الأبطال قبل القتال، ولكن كانت هناك صيحات استهجان كبيرة على أدائه مع اقتراب النزال من نهايته، فيما غادر بعض المشجعين قبل إعلان نتائج الحكام، والتي جاءت على الترتيب التالي: 8072 و7973 و7973.\r\nإن الإدراك المتأخر لما حصل هو أمر مدهش، إلا أن النتيجة ليست مفاجئة، وستشجع هؤلاء النقاد الذين وجدوا في النتيجة فرصة للسخرية من الملاكمة.\r\n\r\nفيما قال تايسون إن قلبه لم يكن في هذه الرياضة بعد الخسارة التي تكبدها أمام كيفن ماكبرايد في عام 2005.\r\n\r\nمنذ البداية كان من الواضح أن هذا رجل يقترب من الستينيات من عمره، ولا يزال يتمتع ببعض القوة ولكن ليس لديه القدرة على التحمل.\r\n\r\nكان الشعور العام هو أنه لكي يفوز تايسون، فإنه يحتاج إلى تنحية بول مبكراً من النزال، وعلى الرغم من أنه ضربه بيده اليمنى في المرة الأولى، إلا أن بول بدأ في الاستجابة بشكل مدروس مع اللكمات، فيما ضرب تايسون بيده اليسرى في المرة الثالثة.\r\n\r\nوبدأ بول الذي كان يرتدي أغلى شورت في العالم في إثارة إعجاب رجل يكبره بـ 31 عاماً.\r\n\r\nكان تايسون، الذي كان يرتدي دعامة سوداء فوق ركبته اليمنى، يحرك رأسه بسرعة لجعل بول يخطئ، لكن مع ذلك، وفي الشوط الخامس، اندفع تايسون لإلقاء ضربة لكنه أخطأ في تقدير مسافتها نحو قدم واحدة على الأقل، ما يوضح مدى الفارق الذي أحدثه تقدم العمر.\r\n\r\nشعر الملاكم المخضرم بمزيد من الضرر في الجولة السابعة عندما استقبل لكمة من اليسار أصابت صدغه، وعند هذه النقطة، بدا معظم المشجعين متحمسين لسماع الجرس الأخير.\r\n', 'The content maker that turned into a boxer, Jake Paul, left a permanent stigma on the legacy of the boxer and the heavyweight hero twice Mike Tyson, after achieving a victory in a match described as fading, in front of 70 thousand fans in Texas, who were disappointed by the result, as well as in front of millions Those who watched the controversial match on the well -known Netflix network.\r\n\r\n Tyson seemed to be a shadow of his old character, as expected from a 58 -year -old man and has not competed at the professional level for 19 years.\r\n\r\n As for Paul, who is 27 years old, although he is a beginner in boxing, he is very athlete, and his age is very small for Tyson, he kept his opponent at a distance, and he paid accurate punches in a battle of eight rounds for two minutes, while Tyson seemed slow. And idle.\r\n\r\n Tyson obtained the reception of the heroes before the fighting, but there were great shouts on his performance as the fight approached its end, while some fans left before announcing the results of the referees, which came in the following order: 8072, 7973 and 7973.\r\n The late perception of what happened is amazing, but the result is not surprising, and you will encourage these critics who found in the result an opportunity to ridicule boxing.\r\n\r\n While Tyson said his heart was not in this sport after the loss he incurred against Kevin McBraide in 2005.\r\n\r\n From the beginning it was clear that this is a man approaching the sixties, and still has some strength but he has no endurance.\r\n\r\n The general feeling was that in order for Tyson to win, he needed to remove Paul early from the fight, and although he hit him with his right hand the first time, Paul began to respond in a deliberate way with punches, while Tyson hit his left hand the third time.\r\n\r\n Paul, who was wearing the most expensive shorts in the world, began the admiration of a 31 -year -old man.\r\n\r\n Tyson, who was wearing a black pillar over his right knee, was moving his head quickly to make Paul make mistakes, but with that, in the fifth half, Tyson rushed to a blow but made a mistake in estimating her distance towards at least one foot, showing the extent of the difference he made age .\r\n\r\n The veteran boxer felt more damage in the seventh round when he received a punch from the left hitting his temple, and at this point, most fans looked excited to hear the last bell.', 'Le fabricant de contenu qui s\'est transformé en boxeur, Jake Paul, a laissé une stigmatisation permanente sur l\'héritage du boxeur et du héros poids lourd deux fois Mike Tyson, après avoir remporté une victoire dans un match décrit comme une décoloration, devant 70 000 fans au Texas, qui ont été déçus par le résultat, ainsi que devant des millions ceux qui ont regardé le match controversé sur le réseau Netflix bien connu.\r\n\r\n Tyson semblait être l\'ombre de son ancien personnage, comme prévu d\'un homme de 58 ans et n\'a pas concouru au niveau professionnel pendant 19 ans.\r\n\r\n Quant à Paul, qui a 27 ans, bien qu\'il soit un débutant en boxe, il est très athlète et son âge a très petit pour Tyson, il a gardé son adversaire à distance et il a payé des coups de poing précis dans une bataille de huit Rounds pendant deux minutes, tandis que Tyson semblait lent.\r\n\r\n Tyson a obtenu la réception des héros avant les combats, mais il y a eu de grands cris sur sa performance alors que le combat a approché sa fin, tandis que certains fans sont partis avant d\'annoncer les résultats des arbitres, qui sont venus dans l\'ordre suivant: 8072, 7973 et 7973 .\r\n La perception tardive de ce qui s\'est passé est incroyable, mais le résultat n\'est pas surprenant, et vous encouragerez ces critiques qui ont trouvé dans le résultat une opportunité de ridiculiser la boxe.\r\n\r\n Alors que Tyson a déclaré que son cœur n\'était pas dans ce sport après la défaite qu\'il a subi contre Kevin McBraide en 2005.\r\n\r\n Dès le début, il était clair qu\'il s\'agit d\'un homme qui approchait des années 60, et a encore une certaine force mais il n\'a pas d\'endurance.\r\n\r\n Le sentiment général était que pour que Tyson gagne, il devait retirer Paul tôt du combat, et bien qu\'il l\'ait frappé avec sa main droite la première fois, Paul a commencé à répondre de manière délibérée avec des coups de poing, tandis que Tyson a frappé son main gauche la troisième fois.\r\n\r\n Paul, qui portait le short le plus cher du monde, a commencé l\'admiration d\'un homme de 31 ans.\r\n\r\n Tyson, qui portait un pilier noir sur son genou droit, bougeait rapidement la tête pour faire faire des erreurs, mais avec cela, dans la cinquième mi-temps, Tyson s\'est précipité à un coup mais a fait une erreur en estimant sa distance vers au moins une pied, montrant l\'étendue de la différence qu\'il a fait l\'âge.\r\n\r\n Le boxeur vétéran a ressenti plus de dégâts au septième tour quand il a reçu un coup de poing de la gauche en frappant son temple, et à ce stade, la plupart des fans avaient l\'air excités d\'entendre la dernière cloche.', 'El fabricante de contenido que se convirtió en un boxeador, Jake Paul, dejó un estigma permanente en el legado del boxeador y el héroe de peso pesado dos veces Mike Tyson, después de lograr una victoria en un partido descrito como desvanecimiento, frente a 70 mil fanáticos en Texas, Quien quedó decepcionado por el resultado, así como frente a millones de personas que vieron el controvertido partido en la conocida red de Netflix.\r\n\r\n Tyson parecía ser una sombra de su antiguo personaje, como se esperaba de un hombre de 58 años y no ha competido a nivel profesional durante 19 años.\r\n\r\n En cuanto a Paul, que tiene 27 años, aunque es un principiante en el boxeo, es muy atleta, y su edad es muy pequeña para Tyson, mantuvo a su oponente a distancia y pagó golpes precisos en una batalla de ocho Rondas durante dos minutos, mientras que Tyson parecía lento.\r\n\r\n Tyson obtuvo la recepción de los héroes antes de la lucha, pero hubo grandes gritos en su actuación cuando la pelea se acercó a su fin, mientras que algunos fanáticos se fueron antes de anunciar los resultados de los árbitros, que se produjeron en el siguiente orden: 8072, 7973 y 7973 .\r\n La percepción tardía de lo que sucedió es sorprendente, pero el resultado no es sorprendente, y alentará a estos críticos que encontraron en el resultado la oportunidad de ridiculizar el boxeo.\r\n\r\n Mientras Tyson dijo que su corazón no estaba en este deporte después de la pérdida, incurrió contra Kevin McBraide en 2005.\r\n\r\n Desde el principio estaba claro que este es un hombre que se acerca a los años sesenta, y todavía tiene cierta fuerza, pero no tiene resistencia.\r\n\r\n El sentimiento general era que para que Tyson ganara, necesitaba sacar a Paul temprano de la pelea, y aunque lo golpeó con su mano derecha la primera vez, Paul comenzó a responder de manera deliberada con golpes, mientras que Tyson bateó su mano izquierda la tercera vez.\r\n\r\n Paul, que llevaba los pantalones cortos más caros del mundo, comenzó la admiración de un hombre de 31 años.\r\n\r\n Tyson, que llevaba un pilar negro sobre su rodilla derecha, estaba moviendo la cabeza rápidamente para hacer que Paul cometiera errores, pero con eso, en la quinta mitad, Tyson corrió a un golpe pero cometió un error al estimar su distancia hacia al menos un pie, mostrando el alcance de la diferencia que hizo en edad.\r\n\r\n El veterano boxeador sintió más daño en la séptima ronda cuando recibió un golpe de la izquierda golpeando su sien, y en este punto, la mayoría de los fanáticos parecían emocionados al escuchar la última campana.', 'Der Content -Hersteller, der sich in einen Boxer, Jake Paul, verwandelte, hinterließ ein dauerhaftes Stigma für das Erbe des Boxers und des Schwergewichts -Helden, zweimal Mike Tyson, nachdem er in einem als verblassenden Spiel einen Sieg erzielt hatte, vor 70.000 Fans in Texas, die von dem Ergebnis enttäuscht waren, sowie vor Millionen, die das umstrittene Match auf dem gut bekannten Netflix -Netzwerk gesehen haben.\r\n\r\n Tyson schien ein Schatten seines alten Charakters zu sein, wie von einem 58 -jährigen Mann erwartet und seit 19 Jahren nicht mehr auf professioneller Ebene angetreten ist.\r\n\r\n Paul, der 27 Jahre alt ist, obwohl er ein Anfänger im Boxen ist, ist er sehr Sportler, und sein Alter ist für Tyson sehr klein, er hat seinen Gegner in der Ferne behalten und er bezahlte in einer Schlacht von acht genauen Schlägen genaue Schläge Runden für zwei Minuten, während Tyson langsam schien.\r\n\r\n Tyson erhielt den Empfang der Helden vor den Kämpfen, aber es gab große Rufe für seine Leistung, als sich der Kampf an das Ende näherte, während einige Fans vor der Ankündigung der Ergebnisse der Schiedsrichter, die in der folgenden Reihenfolge kam, ankündigten: 8072, 7973 und 7973 .\r\n Die späte Wahrnehmung dessen, was passiert ist, ist erstaunlich, aber das Ergebnis ist nicht überraschend, und Sie werden diese Kritiker ermutigen, die im Ergebnis eine Gelegenheit gefunden haben, das Boxen zu verspotten.\r\n\r\n Während Tyson sagte, sein Herz sei nach dem Verlust, den er 2005 gegen Kevin McBraide entsprach, nicht in diesem Sport sei.\r\n\r\n Von Anfang an war klar, dass dies ein Mann ist, der sich den sechziger Jahren nähert und immer noch etwas Kraft hat, aber er hat keine Ausdauer.\r\n\r\n Das allgemeine Gefühl war, dass er Paul früh aus dem Kampf entfernen musste, damit Tyson gewann, und obwohl er ihn zum ersten Mal mit der rechten Hand schlug, begann Paul auf gezielte Weise mit Schlägen zu reagieren, während Tyson seine schlug Linkes Hand beim dritten Mal.\r\n\r\n Paul, der die teuersten Shorts der Welt trug, begann die Bewunderung eines 31 -jährigen Mannes.\r\n\r\n Tyson, der eine schwarze Säule über seinem rechten Knie trug, bewegte sich schnell mit dem Kopf, um Paul zu fehlern, aber damit eilte Tyson in der fünften Halbzeit zu einem Schlag, machte aber einen Fehler, um ihre Entfernung in Richtung mindestens einem zu schätzen Fuß, der das Ausmaß des Unterschieds zeigt, den er machte.\r\n\r\n Der Veteranenboxer spürte in der siebten Runde mehr Schaden, als er einen Schlag von links in den Tempel traf, und zu diesem Zeitpunkt sahen die meisten Fans aufgeregt, die letzte Glocke zu hören.', 'De inhoudsmaker die een bokser, Jake Paul, veranderde, liet een permanent stigma achter op de erfenis van de bokser en de zwaargewicht held tweemaal Mike Tyson, na het behalen van een overwinning in een wedstrijd beschreven als vervaging, voor 70 duizend fans in Texas, die teleurgesteld waren door het resultaat, evenals voor miljoenen degenen die de controversiële wedstrijd hebben bekeken op het goed bekende Netflix -netwerk.\r\n\r\n Tyson leek een schaduw van zijn oude personage te zijn, zoals verwacht van een 58 -jarige man en heeft 19 jaar niet op professioneel niveau deelgenomen.\r\n\r\n Wat Paul betreft, die 27 jaar oud is, hoewel hij een beginner is in het boksen, hij is een zeer atleet, en zijn leeftijd is erg klein voor Tyson, hij hield zijn tegenstander op afstand, en hij betaalde nauwkeurige stoten in een strijd van acht Rondes gedurende twee minuten, terwijl Tyson langzaam leek.\r\n\r\n Tyson verkreeg de receptie van de helden vóór de gevechten, maar er waren geweldige schreeuwen van zijn prestaties toen het gevecht het einde naderde, terwijl sommige fans vertrokken voordat ze de resultaten van de scheidsrechters aankondigden, die in de volgende volgorde kwamen: 8072, 7973 en 7973 .\r\n De late perceptie van wat er is gebeurd, is verbazingwekkend, maar het resultaat is niet verrassend en je zult deze critici aanmoedigen die in het resultaat een kans hebben om boksen belachelijk te maken.\r\n\r\n Terwijl Tyson zei dat zijn hart niet in deze sport was na het verlies dat hij in 2005 tegen Kevin McBraide liep.\r\n\r\n Vanaf het begin was het duidelijk dat dit een man is die de jaren zestig nadert en nog steeds wat kracht heeft, maar hij heeft geen uithoudingsvermogen.\r\n\r\n Het algemene gevoel was dat hij, om Tyson te winnen, Paul vroeg uit het gevecht moest verwijderen, en hoewel hij hem de eerste keer met zijn rechterhand sloeg, begon Paul op een opzettelijke manier te reageren met stoten, terwijl Tyson de zijne sloeg linkerhand de derde keer.\r\n\r\n Paul, die de duurste shorts ter wereld droeg, begon de bewondering van een 31 -jarige man.\r\n\r\n Tyson, die een zwarte pilaar over zijn rechterknie droeg, bewoog zijn hoofd snel om Paul fouten te laten maken, maar daarmee snelde Tyson in de vijfde helft naar een klap, maar maakte een fout bij het schatten van haar afstand naar minstens één voet, die de omvang toont van het verschil dat hij leeftijd maakte.\r\n\r\n De ervaren bokser voelde meer schade in de zevende ronde toen hij een klap kreeg van links die zijn tempel raakte, en op dit moment zagen de meeste fans er opgewonden uit om de laatste bel te horen.', 'tyson.jpg', '2024-11-24 08:52:35', NULL, NULL),
(46, 'اخر الاخبار', 'latest news', 'Dernières nouvelles', 'Últimas noticias', 'neueste Nachrichten', 'Laatste nieuws', 'اخر الاخبار', 'latest news', 'Dernières nouvelles', 'Últimas noticias', 'neueste Nachrichten', 'Laatste nieuws', 'IMG_9510.png', '2025-06-10 11:54:55', NULL, NULL),
(47, 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', '1.PNG', '2025-12-09 14:01:54', NULL, NULL),
(48, 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', '1.PNG', '2025-12-09 14:01:59', NULL, NULL),
(49, 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', '2.PNG', '2025-12-09 14:02:16', NULL, NULL),
(50, 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', '2.PNG', '2025-12-09 14:02:19', NULL, NULL),
(51, 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', 'اخر الاخبار', 'latest news', 'dernières nouvelles', 'últimas noticias', 'neueste Nachrichten', 'laatste nieuws', '2.PNG', '2025-12-09 14:02:19', NULL, NULL),
(52, 'هذا مثال على اختصار ', 'This is an example of an abbreviation', 'Ceci est un exemple d\'abréviation', 'Este es un ejemplo de abreviatura.', 'Dies ist ein Beispiel für eine Abkürzung', 'Dit is een voorbeeld van een afkorting', '---\r\n__إعلان :)__\r\n\r\n- __[](:..)__ - صورة عالية الجودة وسريعة التغيير في حجمها عبر المتصفح.\r\n- __[](:.)__ - سهل الاستخدام للمطورين\r\n18 مع دعم للجمع وقواعد لغوية سهلة.\r\n\r\nستُعجبك هذه المشاريع بالتأكيد!\r\n\r\n--\r\n\r\n# 1 عنوان 8-)\r\n## 2 عنوان\r\n### 3 عنوان\r\n#### 4 عنوان\r\n##### 5 عنوان\r\n###### 6 عنوان\r\n\r\n## قواعد أفقية\r\n\r\n___\r\n\r\n---\r\n\r\n***\r\n\r\n## بدائل الطباعة\r\n\r\nفعّل خيار مُحسّن الطباعة لعرض النتيجة.\r\n\r\n(ج) (ج) (ر) (ر) (م) (م) (ص) (ص) -\r\n\r\nاختبار.. اختبار.. اختبار.. اختبار.. اختبار؟.. اختبار!....\r\n\r\n!!!!!!??? ,, -- ---\r\n\r\nأغبياء، علامات اقتباس مزدوجة وعلامات اقتباس مفردة\r\n\r\n## توكيد\r\n\r\n**هذا نص عريض**\r\n\r\n__هذا نص عريض__\r\n\r\n*هذا نص مائل*\r\n\r\n_هذا نص مائل_\r\n\r\nشطب\r\n\r\n## علامات اقتباس\r\n\r\n يمكن أيضًا دمج علامات الاقتباس...\r\n ...باستخدام علامات أكبر من إضافية بجوار بعضها البعض...\r\n   ...أو بمسافات بين الأسهم.\r\n\r\n## القوائم\r\n\r\nغير مرتبة\r\n\r\n أنشئ قائمة ببدء السطر بـ ``، `-`، أو `*`\r\n تُنشأ القوائم الفرعية بمسافتين بادئتين:\r\n- تغيير حرف العلامة يُجبر على بدء قائمة جديدة:\r\n*     \r\n     \r\n-    \r\n سهل جدًا!\r\n\r\nمُرتَّب\r\n\r\n١. نص لوريم إيبسوم ( ) (  )\r\n٢. نص مُرتَّب (  )\r\n٣. نص لوريم إيبسوم (    )\r\n\r\n١. يمكنك استخدام أرقام متسلسلة...\r\n١. ...أو الاحتفاظ بجميع الأرقام كما هي `١`.\r\n\r\nابدأ الترقيم بالإزاحة:\r\n\r\n٥٧. \r\n١. \r\n\r\n## الكود\r\n\r\n`` مُضمَّن\r\n\r\nكود بمسافة بادئة\r\n\r\n بعض التعليقات\r\nالسطر ١ من الكود\r\nالسطر ٢ من الكود\r\nالسطر ٣ من الكود\r\n\r\nكود الكتلة \r\n\r\n```\r\nمثال على النص هنا...\r\n```\r\n\r\nتظليل بناء الجملة\r\n\r\n``` \r\n    () \r\n ;\r\n;\r\n\r\n.((5));\r\n```\r\n\r\n## الجداول\r\n\r\n الخيار  الوصف \r\n ------  -----------   بيانات  مسار ملفات البيانات لتوفير البيانات التي سيتم تمريرها إلى القوالب. \r\n محرك  محرك لمعالجة القوالب.  هو الخيار الافتراضي. \r\n امتداد  لملفات الوجهة. \r\n\r\nأعمدة محاذية لليمين\r\n\r\n خيار  وصف \r\n ------: -----------:\r\n بيانات  مسار ملفات البيانات لتوفير البيانات التي سيتم تمريرها إلى القوالب. \r\n محرك  محرك لمعالجة القوالب.  هو الخيار الافتراضي. \r\n امتداد  لملفات الوجهة. \r\n\r\n## روابط\r\n\r\n[نص الرابط](:..)\r\n\r\n[رابط مع عنوان](:.. نص العنوان!)\r\n\r\nرابط مُحوّل تلقائيًا :. (فعّل خاصية  للعرض)\r\n\r\n## صور\r\n\r\n![](:...)\r\n![](:...  )\r\n\r\nمثل الروابط، تحتوي الصور أيضًا على صيغة حاشية سفلية.\r\n\r\n![نص بديل][معرف]\r\n\r\nمع مرجع لاحق في المستند يُحدد موقع عنوان :\r\n\r\n[معرف]: :...  \r\n\r\n## إضافات\r\n\r\nالـ الميزة المميزة لـ `-` هي دعمه الفعال لـ [إضافات بناء الجملة](:..--).\r\n\r\n### [الرموز التعبيرية](:.---)\r\n\r\n الترميز الكلاسيكي: :: :: :: ::\r\n\r\n الاختصارات (الرموز التعبيرية): :-) :-( 8-) ;)\r\n\r\nانظر [كيفية تغيير المخرجات](:.---#-) باستخدام .\r\n\r\n### [النص السفلي](:.---)  [النص العلوي](:.---)\r\n\r\n- 19\r\n- 2\r\n\r\n### [](:.---)\r\n\r\nنص مُدرج\r\n\r\n### [](:.---)\r\n\r\nنص مُعلَّم\r\n\r\n### [الحواشي السفلية](:.---)\r\n\r\nرابط الحاشية السفلية 1[الأول].\r\n\r\nرابط الحاشية السفلية 2[الثاني].\r\n\r\nتعريف الحاشية السفلية المضمنة[نص الحاشية السفلية المضمنة].\r\n\r\nمرجع حاشية سفلية مكرر[].\r\n\r\n[]: حاشية سفلية **يمكن أن تحتوي على ترميز**\r\n\r\nوفقرات متعددة.\r\n\r\n[]: نص الحاشية السفلية.\r\n\r\n### [قوائم التعريفات](:.---)\r\n\r\nالمصطلح 1\r\n\r\n: التعريف 1\r\nمع استمرارية غير مكتملة.\r\n\r\nالمصطلح 2 مع *ترميز مضمن*\r\n\r\n: التعريف 2\r\n\r\nبعض التعليمات البرمجية، جزء من التعريف 2\r\n\r\nالفقرة الثالثة من التعريف 2.\r\n\r\n_نمط مضغوط:_\r\n\r\nالمصطلح 1\r\n التعريف 1\r\n\r\nالمصطلح 2\r\n التعريف 2أ\r\n التعريف 2ب\r\n\r\n### [الاختصارات](:.---)\r\n\r\nهذا مثال على اختصار .\r\n\r\nيُحوّل هذا إلى ، ولكنه يُبقي على الإدخالات الجزئية سليمة مثل  وما إلى ذلك.\r\n\r\n*[]: لغة ترميز النص التشعبي\r\n\r\n### [حاويات مخصصة](:.---)\r\n\r\n::: تحذير\r\n*هنا تنانين*\r\n:::', '---\r\n__Advertisement :)__\r\n\r\n- __[](:..)__ - High-quality image that can be quickly resized via the browser.\r\n- __[](:.)__ - Easy to use for developers\r\n18 with support for plurals and easy grammar.\r\n\r\nYou\'ll love these projects for sure!\r\n\r\n--\r\n\r\n#1 Title 8-)\r\n## 2 titles\r\n### 3 titles\r\n#### 4 address\r\n##### 5 titles\r\n###### 6 titles\r\n\r\n## Horizontal rules\r\n\r\n___\r\n\r\n---\r\n\r\n***\r\n\r\n##Printing alternatives\r\n\r\nActivate the Print Optimizer option to view the result.\r\n\r\n(c) (c) (t) (t) (m) (m) (r) (r) -\r\n\r\nTest.. Test.. Test.. Test.. Test?.. Test!....\r\n\r\n!!!!!!???,, -- ---\r\n\r\nStupid, double quotes and single quotes\r\n\r\n## Emphasis\r\n\r\n**This is bold text**\r\n\r\n__This is bold text__\r\n\r\n*This is italicized text*\r\n\r\n_This is italic text_\r\n\r\nWrite off\r\n\r\n## Quotation marks\r\n\r\nQuotation marks can also be combined...\r\n...using additional greater than signs next to each other...\r\n...or with spaces between arrows.\r\n\r\n## Lists\r\n\r\nUntidy\r\n\r\nCreate a list by starting the line with `, `-`, or `*`\r\nSubmenus are created with two indents:\r\n- Changing the tag character forces a new menu to start:\r\n*\r\n\r\n-\r\nVery easy!\r\n\r\nArranged\r\n\r\n1.Text of Lorem Ipsum ( ) ( )\r\n2.sorted text ( )\r\n3.Lorem Ipsum text ( )\r\n\r\n1.You can use serial numbers...\r\n1....or keep all numbers as `1`.\r\n\r\nStart numbering with offset:\r\n\r\n57.\r\n1.\r\n\r\n## Code\r\n\r\n``Included\r\n\r\nIndented code\r\n\r\nSome comments\r\nLine 1 of the code\r\nLine 2 of the code\r\nLine 3 of the code\r\n\r\nBlock code\r\n\r\n```\r\nExample text here...\r\n```\r\n\r\nSyntax shading\r\n\r\n```\r\n()\r\n;\r\n;\r\n\r\n.((5));\r\n```\r\n\r\n## Tables\r\n\r\nOption Description\r\n------ ----------- Data File Path data to provide the data to be passed to the templates.\r\nDrive motor for mold processing.It is the default option.\r\nExtension for destination files.\r\n\r\nRight aligned columns\r\n\r\nDescription option\r\n------: -----------:\r\nData file path data to provide the data that will be passed to the templates.\r\nDrive motor for mold processing.It is the default option.\r\nExtension for destination files.\r\n\r\n## Links\r\n\r\n[link text](:..)\r\n\r\n[Link with title](:..title text!)\r\n\r\nAutomatically converted link:.(Enable display feature)\r\n\r\n## Photos\r\n\r\n![](:...)\r\n![](:... )\r\n\r\nLike links, images also have footnote format.\r\n\r\n![alt text][id]\r\n\r\nWith a later reference in the document locating the address:\r\n\r\n[ID]::...\r\n\r\n## إضافات\r\n\r\nThe distinctive feature of `-` is its effective support for [syntax extensions](:..--).\r\n\r\n### [Emoji](:.---)\r\n\r\nClassic notation: :: :: :: ::\r\n\r\nAbbreviations (emojis): :-) :-(8-) ;)\r\n\r\nSee [How to change the output](:.---#-) using .\r\n\r\n### [Bottom Text](:.---) [Top Text](:.---)\r\n\r\n- 19\r\n- 2\r\n\r\n### [](:.---)\r\n\r\nInserted text\r\n\r\n### [](:.---)\r\n\r\nMarked text\r\n\r\n### [Footnotes](:.---)\r\n\r\nFootnote link 1[first].\r\n\r\nFootnote 2[second] link.\r\n\r\nDefinition of embedded footnote[embedded footnote text].\r\n\r\nDuplicate footnote reference[].\r\n\r\n[]: Footnote **Can contain encoding**\r\n\r\nAnd multiple paragraphs.\r\n\r\n[]: Footnote text.\r\n\r\n### [Definition Lists](:.---)\r\n\r\nTerm 1\r\n\r\n: Definition 1\r\nWith incomplete continuity.\r\n\r\nTerm 2 with *inline notation*\r\n\r\n: Definition 2\r\n\r\nSome code, part of definition 2\r\n\r\nThe third paragraph of the definition 2.\r\n\r\n_Compact style:_\r\n\r\nTerm 1\r\nDefinition 1\r\n\r\nTerm 2\r\nDefinition 2a\r\nDefinition 2b\r\n\r\n### [Abbreviations](:.---)\r\n\r\nThis is an example of an abbreviation.\r\n\r\nThis converts to , but keeps partial entries intact such as etc.\r\n\r\n*[]: Hypertext Markup Language\r\n\r\n### [Custom Containers](:.---)\r\n\r\n::: Warning\r\n*Here are dragons*\r\n:::', '---\r\n__Publicité :)__\r\n\r\n- __[](:..)__ - Image de haute qualité pouvant être rapidement redimensionnée via le navigateur.\r\n- __[](:.)__ - Facile à utiliser pour les développeurs\r\n18 avec prise en charge des pluriels et grammaire facile.\r\n\r\nVous allez adorer ces projets, c\'est sûr !\r\n\r\n--\r\n\r\n#1 Titre 8-)\r\n## 2 titres\r\n### 3 titres\r\n#### 4 adresse\r\n##### 5 titres\r\n###### 6 titres\r\n\r\n## Règles horizontales\r\n\r\n___\r\n\r\n---\r\n\r\n***\r\n\r\n##Alternatives d\'impression\r\n\r\nActivez l\'option Print Optimizer pour afficher le résultat.\r\n\r\n(c) (c) (t) (t) (m) (m) (r) (r) -\r\n\r\nTest.. Test.. Test.. Test.. Test ?.. Test !....\r\n\r\n!!!!!!!???,, -- ---\r\n\r\nStupide, guillemets doubles et guillemets simples\r\n\r\n## Accentuation\r\n\r\n**Ceci est du texte en gras**\r\n\r\n__Ceci est du texte en gras__\r\n\r\n*Ceci est un texte en italique*\r\n\r\n_Ceci est un texte en italique_\r\n\r\nRadier\r\n\r\n## Guillemets\r\n\r\nLes guillemets peuvent également être combinés...\r\n...en utilisant des signes supérieurs à supplémentaires les uns à côté des autres...\r\n...ou avec des espaces entre les flèches.\r\n\r\n## Listes\r\n\r\nDésordonné\r\n\r\nCréez une liste en commençant la ligne par `, `-` ou `*`\r\nLes sous-menus sont créés avec deux retraits :\r\n- Changer le caractère du tag force le lancement d\'un nouveau menu :\r\n*     \r\n\r\n-    \r\nTrès facile !\r\n\r\nArrangé\r\n\r\n1. Texte de Lorem Ipsum ( ) ( )\r\n2. texte trié ( )\r\n3. Texte du Lorem Ipsum ( )\r\n\r\n1. Vous pouvez utiliser des numéros de série...\r\n1. ...ou conservez tous les nombres comme « 1 ».\r\n\r\nCommencez la numérotation avec décalage :\r\n\r\n57. \r\n1. \r\n\r\n##Code\r\n\r\n``Inclus\r\n\r\nCode indenté\r\n\r\nQuelques commentaires\r\nLigne 1 du code\r\nLigne 2 du code\r\nLigne 3 du code\r\n\r\nBloquer le code \r\n\r\n```\r\nExemple de texte ici...\r\n```\r\n\r\nOmbrage de syntaxe\r\n\r\n``` \r\n() \r\n;\r\n;\r\n\r\n.((5));\r\n```\r\n\r\n## Tableaux\r\n\r\nDescription des options \r\n------ ---------------- Données du chemin du fichier de données pour fournir les données à transmettre aux modèles.\r\nMoteur d\'entraînement pour le traitement des moules.C\'est l\'option par défaut.\r\nExtension pour les fichiers de destination.\r\n\r\nColonnes alignées à droite\r\n\r\nOption de description \r\n------ : ----------- :\r\nDonnées de chemin de fichier de données pour fournir les données qui seront transmises aux modèles.\r\nMoteur d\'entraînement pour le traitement des moules.C\'est l\'option par défaut.\r\nExtension pour les fichiers de destination.\r\n\r\n## Liens\r\n\r\n[texte du lien](:..)\r\n\r\n[Lien avec le titre](:..texte du titre !)\r\n\r\nLien automatiquement converti :.(Activer la fonction d\'affichage)\r\n\r\n## Photos\r\n\r\n![](:...)\r\n![](:... )\r\n\r\nComme les liens, les images ont également un format de note de bas de page.\r\n\r\n![texte alternatif][identifiant]\r\n\r\nAvec une référence ultérieure dans le document situant l\'adresse :\r\n\r\n[identifiant] : ...  \r\n\r\n## Modules complémentaires\r\n\r\nLa particularité de `-` est sa prise en charge efficace des [extensions de syntaxe](:..--).\r\n\r\n### [Émoji](:.---)\r\n\r\nNotation classique : :: :: :: ::\r\n\r\nAbréviations (emojis): :-) :-(8-) ;)\r\n\r\nVoir [Comment modifier la sortie](:.---#-) en utilisant .\r\n\r\n### [Texte du bas](:.---) [Texte du haut](:.---)\r\n\r\n- 19\r\n- 2\r\n\r\n### [](:.---)\r\n\r\nTexte inséré\r\n\r\n### [](:.---)\r\n\r\nTexte marqué\r\n\r\n### [Notes de bas de page](:.---)\r\n\r\nLien de note de bas de page 1[premier].\r\n\r\nLien de note de bas de page 2[seconde].\r\n\r\nDéfinition de la note de bas de page intégrée [texte de la note de bas de page intégrée].\r\n\r\nRéférence de note de bas de page en double[].\r\n\r\n[] : note de bas de page **Peut contenir du codage**\r\n\r\nEt plusieurs paragraphes.\r\n\r\n[] : texte de la note de bas de page.\r\n\r\n### [Listes de définitions](:.---)\r\n\r\nTerme 1\r\n\r\n: Définition 1\r\nAvec une continuité incomplète.\r\n\r\nTerme 2 avec *notation en ligne*\r\n\r\n: Définition 2\r\n\r\nDu code, une partie de la définition 2\r\n\r\nLe troisième paragraphe de la définition 2.\r\n\r\n_Style compact :_\r\n\r\nTerme 1\r\nDéfinition 1\r\n\r\nTerme 2\r\nDéfinition 2a\r\nDéfinition 2b\r\n\r\n### [Abréviations](:.---)\r\n\r\nCeci est un exemple d\'abréviation.\r\n\r\nCela se convertit en , mais conserve les entrées partielles intactes, telles que etc.\r\n\r\n*[] : langage de balisage hypertexte\r\n\r\n### [Conteneurs personnalisés](:.---)\r\n\r\n::: Avertissement\r\n*Voici des dragons*\r\n:::', '---\r\n__Anuncio :)__\r\n\r\n- __[](:..)__ - Imagen de alta calidad cuyo tamaño se puede cambiar rápidamente a través del navegador.\r\n- __[](:.)__ - Fácil de usar para desarrolladores\r\n18 con soporte para plurales y gramática sencilla.\r\n\r\n¡Seguro que te encantarán estos proyectos!\r\n\r\n--\r\n\r\n#1 Título 8-)\r\n## 2 títulos\r\n### 3 títulos\r\n#### 4 dirección\r\n##### 5 títulos\r\n###### 6 títulos\r\n\r\n## Reglas horizontales\r\n\r\n___\r\n\r\n---\r\n\r\n***\r\n\r\n##Alternativas de impresión\r\n\r\nActive la opción Optimizador de impresión para ver el resultado.\r\n\r\n(c) (c) (t) (t) (m) (m) (r) (r) -\r\n\r\nPrueba.. Prueba.. Prueba.. Prueba.. ¿Prueba?.. ¡Prueba!....\r\n\r\n!!!!!!!!???,, -- ---\r\n\r\nEstúpido, comillas dobles y comillas simples.\r\n\r\n## Énfasis\r\n\r\n**Este es texto en negrita**\r\n\r\n__Este es texto en negrita__\r\n\r\n*Este es texto en cursiva*\r\n\r\n_Este es texto en cursiva_\r\n\r\ncancelar\r\n\r\n## Comillas\r\n\r\nLas comillas también se pueden combinar...\r\n...usando signos adicionales de mayor que uno al lado del otro...\r\n...o con espacios entre flechas.\r\n\r\n## Listas\r\n\r\ndesordenado\r\n\r\nCree una lista comenzando la línea con `, `-` o `*`\r\nLos submenús se crean con dos sangrías:\r\n- Cambiar el carácter de la etiqueta fuerza el inicio de un nuevo menú:\r\n*     \r\n\r\n-    \r\n¡Muy fácil!\r\n\r\narreglado\r\n\r\n1. Texto de Lorem Ipsum ( ) ( )\r\n2. texto ordenado ( )\r\n3. Texto de Lorem Ipsum ( )\r\n\r\n1. Puedes usar números de serie...\r\n1. ...o mantener todos los números como \"1\".\r\n\r\nEmpiece a numerar con desplazamiento:\r\n\r\n57. \r\n1. \r\n\r\n## Código\r\n\r\n``Incluido\r\n\r\ncódigo sangrado\r\n\r\nAlgunos comentarios\r\nLínea 1 del código\r\nLínea 2 del código\r\nLínea 3 del código\r\n\r\ncódigo de bloque \r\n\r\n```\r\nTexto de ejemplo aquí...\r\n```\r\n\r\nSombreado de sintaxis\r\n\r\n``` \r\n() \r\n;\r\n;\r\n\r\n.((5));\r\n```\r\n\r\n## Tablas\r\n\r\nDescripción de la opción \r\n------ ----------- Datos de ruta del archivo de datos para proporcionar los datos que se pasarán a las plantillas.\r\nMotor de accionamiento para procesamiento de moldes.Es la opción predeterminada.\r\nExtensión para archivos de destino.\r\n\r\nColumnas alineadas a la derecha\r\n\r\nOpción de descripción \r\n------: -----------:\r\nDatos de ruta del archivo de datos para proporcionar los datos que se pasarán a las plantillas.\r\nMotor de accionamiento para procesamiento de moldes.Es la opción predeterminada.\r\nExtensión para archivos de destino.\r\n\r\n## Enlaces\r\n\r\n[texto del enlace](:..)\r\n\r\n[Enlace con título](:..texto del título!)\r\n\r\nEnlace convertido automáticamente:.(Habilitar función de visualización)\r\n\r\n## Fotos\r\n\r\n![](:...)\r\n![](:... )\r\n\r\nAl igual que los enlaces, las imágenes también tienen formato de nota al pie.\r\n\r\n![texto alternativo][id]\r\n\r\nCon referencia posterior en el documento localizando la dirección:\r\n\r\n[ID]::...  \r\n\r\n## Complementos\r\n\r\nLa característica distintiva de `-` es su soporte efectivo para [extensiones de sintaxis](:..--).\r\n\r\n### [Emoji](:.---)\r\n\r\nNotación clásica: :: :: :: ::\r\n\r\nAbreviaturas (emojis): :-) :-(8-) ;)\r\n\r\nConsulte [Cómo cambiar la salida](:.---#-) usando .\r\n\r\n### [Texto inferior](:.---) [Texto superior](:.---)\r\n\r\n- 19\r\n- 2\r\n\r\n### [](:.---)\r\n\r\nTexto insertado\r\n\r\n### [](:.---)\r\n\r\nTexto marcado\r\n\r\n### [Notas al pie](:.---)\r\n\r\nEnlace de nota al pie 1 [primero].\r\n\r\nNota al pie 2[segundo] enlace.\r\n\r\nDefinición de nota al pie incrustada[texto de nota al pie incrustada].\r\n\r\nReferencia de nota al pie duplicada[].\r\n\r\n[]: Nota al pie **Puede contener codificación**\r\n\r\nY varios párrafos.\r\n\r\n[]: Texto de nota al pie.\r\n\r\n### [Listas de definiciones](:.---)\r\n\r\nTérmino 1\r\n\r\n: Definición 1\r\nCon continuidad incompleta.\r\n\r\nTérmino 2 con *notación en línea*\r\n\r\n: Definición 2\r\n\r\nAlgún código, parte de la definición 2.\r\n\r\nEl tercer párrafo de la definición 2.\r\n\r\n_Estilo compacto:_\r\n\r\nTérmino 1\r\nDefinición 1\r\n\r\nTérmino 2\r\nDefinición 2a\r\nDefinición 2b\r\n\r\n### [Abreviaturas](:.---)\r\n\r\nEste es un ejemplo de abreviatura.\r\n\r\nEsto se convierte a , pero mantiene intactas las entradas parciales, como etc.\r\n\r\n*[]: Lenguaje de marcado de hipertexto\r\n\r\n### [Contenedores personalizados](:.---)\r\n\r\n::: Advertencia\r\n*Aquí hay dragones*\r\n:::', '---\r\n__Werbung :)__\r\n\r\n- __[](:..)__ – Hochwertiges Bild, dessen Größe schnell über den Browser geändert werden kann.\r\n- __[](:.)__ – Einfach zu verwenden für Entwickler\r\n18 mit Unterstützung für Pluralformen und einfacher Grammatik.\r\n\r\nSie werden diese Projekte mit Sicherheit lieben!\r\n\r\n--\r\n\r\n#1 Titel 8-)\r\n## 2 Titel\r\n### 3 Titel\r\n#### 4 Adresse\r\n##### 5 Titel\r\n###### 6 Titel\r\n\r\n## Horizontale Regeln\r\n\r\n___\r\n\r\n---\r\n\r\n***\r\n\r\n##Druckalternativen\r\n\r\nAktivieren Sie die Option „Druckoptimierung“, um das Ergebnis anzuzeigen.\r\n\r\n(c) (c) (t) (t) (m) (m) (r) (r) -\r\n\r\nTest.. Test.. Test.. Test.. Test?.. Test!....\r\n\r\n!!!!!!???,, -- ---\r\n\r\nDumme, doppelte und einfache Anführungszeichen\r\n\r\n## Betonung\r\n\r\n**Dies ist fetter Text**\r\n\r\n__Das ist fetter Text__\r\n\r\n*Dies ist kursiver Text*\r\n\r\n_Dies ist kursiver Text_\r\n\r\nAbschreiben\r\n\r\n## Anführungszeichen\r\n\r\nAnführungszeichen können auch kombiniert werden...\r\n...mit zusätzlichen Größer-als-Zeichen nebeneinander...\r\n...oder mit Leerzeichen zwischen den Pfeilen.\r\n\r\n## Listen\r\n\r\nUnordentlich\r\n\r\nErstellen Sie eine Liste, indem Sie die Zeile mit „, „-“ oder „*“ beginnen\r\nUntermenüs werden mit zwei Einzügen erstellt:\r\n- Das Ändern des Tag-Zeichens erzwingt den Start eines neuen Menüs:\r\n*     \r\n\r\n-    \r\nGanz einfach!\r\n\r\nArrangiert\r\n\r\n1. Text von Lorem Ipsum ( ) ( )\r\n2. sortierter Text ( )\r\n3. Lorem Ipsum-Text ( )\r\n\r\n1. Sie können Seriennummern verwenden...\r\n1. ...oder behalten Sie alle Zahlen als „1“.\r\n\r\nNummerierung mit Offset beginnen:\r\n\r\n57. \r\n1. \r\n\r\n## Code\r\n\r\n„Inklusive\r\n\r\nEingerückter Code\r\n\r\nEinige Kommentare\r\nZeile 1 des Codes\r\nZeile 2 des Codes\r\nZeile 3 des Codes\r\n\r\nBlockcode \r\n\r\n„\r\nBeispieltext hier...\r\n„\r\n\r\nSyntax-Shading\r\n\r\n„ \r\n() \r\n;\r\n;\r\n\r\n.((5));\r\n„\r\n\r\n## Tische\r\n\r\nOptionsbeschreibung \r\n------ ----------- Datendateipfaddaten zur Bereitstellung der Daten, die an die Vorlagen übergeben werden sollen. \r\nAntriebsmotor für die Formenbearbeitung.  Dies ist die Standardoption. \r\nErweiterung für Zieldateien. \r\n\r\nRechtsbündige Spalten\r\n\r\nBeschreibungsoption \r\n------: -----------:\r\nDatendateipfaddaten zur Bereitstellung der Daten, die an die Vorlagen übergeben werden. \r\nAntriebsmotor für die Formenbearbeitung.  Dies ist die Standardoption. \r\nErweiterung für Zieldateien. \r\n\r\n## Links\r\n\r\n[Linktext](:..)\r\n\r\n[Link mit Titel](:..Titeltext!)\r\n\r\nAutomatisch konvertierter Link:. (Anzeigefunktion aktivieren)\r\n\r\n## Fotos\r\n\r\n![](:...)\r\n![](:... )\r\n\r\nWie Links haben auch Bilder das Fußnotenformat.\r\n\r\n![alt text][id]\r\n\r\nMit einem späteren Hinweis im Dokument zur Lokalisierung der Adresse:\r\n\r\n[ID]::...  \r\n\r\n## Add-ons\r\n\r\nDas besondere Merkmal von „-“ ist seine effektive Unterstützung für [Syntaxerweiterungen](:..--).\r\n\r\n### [Emoji](:.---)\r\n\r\nKlassische Notation: :: :: :: ::\r\n\r\nAbkürzungen (Emojis): :-) :-(8-) ;)\r\n\r\nSiehe [So ändern Sie die Ausgabe](:.---#-) mit .\r\n\r\n### [Unterer Text](:.---) [Oberer Text](:.---)\r\n\r\n- 19\r\n- 2\r\n\r\n### [](:.---)\r\n\r\nText eingefügt\r\n\r\n### [](:.---)\r\n\r\nMarkierter Text\r\n\r\n### [Fußnoten](:.---)\r\n\r\nFußnotenlink 1[zuerst].\r\n\r\nFußnote 2[zweiter] Link.\r\n\r\nDefinition der eingebetteten Fußnote[eingebetteter Fußnotentext].\r\n\r\nDoppelte Fußnotenreferenz[].\r\n\r\n[]: Fußnote **Kann Codierung enthalten**\r\n\r\nUnd mehrere Absätze.\r\n\r\n[]: Fußnotentext.\r\n\r\n### [Definitionslisten](:.---)\r\n\r\nBegriff 1\r\n\r\n: Definition 1\r\nMit unvollständiger Kontinuität.\r\n\r\nTerm 2 mit *Inline-Notation*\r\n\r\n: Definition 2\r\n\r\nEtwas Code, Teil von Definition 2\r\n\r\nDer dritte Absatz der Definition 2.\r\n\r\n_Kompakter Stil:_\r\n\r\nBegriff 1\r\nDefinition 1\r\n\r\nBegriff 2\r\nDefinition 2a\r\nDefinition 2b\r\n\r\n### [Abkürzungen](:.---)\r\n\r\nDies ist ein Beispiel für eine Abkürzung.\r\n\r\nDies wird in konvertiert, Teileinträge wie usw. bleiben jedoch erhalten.\r\n\r\n*[]: Hypertext Markup Language\r\n\r\n### [Benutzerdefinierte Container](:.---)\r\n\r\n::: Warnung\r\n*Hier sind Drachen*\r\n:::', '---\r\n__Advertentie :)__\r\n\r\n- __[](:..)__ - Hoge kwaliteit afbeelding waarvan het formaat snel kan worden aangepast via de browser.\r\n- __[](:.)__ - Gemakkelijk te gebruiken voor ontwikkelaars\r\n18 met ondersteuning voor meervoudsvormen en eenvoudige grammatica.\r\n\r\nJe zult zeker dol zijn op deze projecten!\r\n\r\n--\r\n\r\n#1 Titel 8-)\r\n## 2 titels\r\n### 3 titels\r\n#### 4 adres\r\n##### 5 titels\r\n###### 6 titels\r\n\r\n## Horizontale regels\r\n\r\n___\r\n\r\n---\r\n\r\n***\r\n\r\n##Alternatieven afdrukken\r\n\r\nActiveer de optie Print Optimizer om het resultaat te bekijken.\r\n\r\n(c) (c) (t) (t) (m) (m) (r) (r) -\r\n\r\nProef.. Proef.. Proef.. Proef.. Proef?.. Proef!....\r\n\r\n!!!!!!???,, -- ---\r\n\r\nStom, dubbele aanhalingstekens en enkele aanhalingstekens\r\n\r\n## Nadruk\r\n\r\n**Dit is vetgedrukte tekst**\r\n\r\n__Dit is vetgedrukte tekst__\r\n\r\n*Dit is cursieve tekst*\r\n\r\n_Dit is cursieve tekst_\r\n\r\nSchrijf af\r\n\r\n## Aanhalingstekens\r\n\r\nAanhalingstekens kunnen ook worden gecombineerd...\r\n...met behulp van extra groter dan-tekens naast elkaar...\r\n...of met spaties tussen de pijlen.\r\n\r\n## Lijsten\r\n\r\nSlordig\r\n\r\nMaak een lijst door de regel te beginnen met `, `-` of `*`\r\nSubmenu\'s worden gemaakt met twee inspringingen:\r\n- Als u het tagteken wijzigt, wordt er een nieuw menu geopend:\r\n*     \r\n\r\n-    \r\nHeel gemakkelijk!\r\n\r\nGeregeld\r\n\r\n1. Tekst van Lorem Ipsum ( ) ( )\r\n2. gesorteerde tekst ( )\r\n3. Lorem Ipsum-tekst ( )\r\n\r\n1. U kunt serienummers gebruiken...\r\n1. ...of houd alle getallen op `1`.\r\n\r\nNummering starten met offset:\r\n\r\n57. \r\n1. \r\n\r\n## Code\r\n\r\n``Inbegrepen\r\n\r\nIngesprongen code\r\n\r\nEnkele opmerkingen\r\nRegel 1 van de code\r\nRegel 2 van de code\r\nRegel 3 van de code\r\n\r\nBlokcode \r\n\r\n```\r\nVoorbeeldtekst hier...\r\n```\r\n\r\nSyntaxisschaduw\r\n\r\n``` \r\n() \r\n;\r\n;\r\n\r\n.((5));\r\n```\r\n\r\n## Tafels\r\n\r\nOptie Beschrijving \r\n------ ----------- Gegevensbestand Padgegevens om de gegevens op te geven die aan de sjablonen moeten worden doorgegeven.\r\nAandrijfmotor voor matrijsverwerking.Het is de standaardoptie.\r\nExtensie voor doelbestanden.\r\n\r\nRechts uitgelijnde kolommen\r\n\r\nBeschrijving optie \r\n------: -----------:\r\nGegevensbestandspadgegevens om de gegevens op te geven die aan de sjablonen worden doorgegeven.\r\nAandrijfmotor voor matrijsverwerking.Het is de standaardoptie.\r\nExtensie voor doelbestanden.\r\n\r\n## Koppelingen\r\n\r\n[linktekst](:..)\r\n\r\n[Link met titel](:..titeltekst!)\r\n\r\nAutomatisch geconverteerde link:.(Weergavefunctie inschakelen)\r\n\r\n## Foto\'s\r\n\r\n![](:...)\r\n![](:... )\r\n\r\nNet als koppelingen hebben afbeeldingen ook een voetnootindeling.\r\n\r\n![alt-tekst][id]\r\n\r\nMet een latere verwijzing in het document waarin het adres wordt gevonden:\r\n\r\n[ID]::...  \r\n\r\n## Add-ons\r\n\r\nHet onderscheidende kenmerk van `-` is de effectieve ondersteuning voor [syntaxisextensies](:..--).\r\n\r\n### [Emoji](:.---)\r\n\r\nKlassieke notatie: :: :: :: ::\r\n\r\nAfkortingen (emoji\'s): :-) :-(8-) ;)\r\n\r\nZie [Hoe de uitvoer wijzigen](:.---#-) met behulp van .\r\n\r\n### [Onderste tekst](:.---) [Bovenste tekst](:.---)\r\n\r\n- 19\r\n- 2\r\n\r\n### [](:.---)\r\n\r\nIngevoegde tekst\r\n\r\n### [](:.---)\r\n\r\nGemarkeerde tekst\r\n\r\n### [Voetnoten](:.---)\r\n\r\nVoetnootlink 1[eerste].\r\n\r\nVoetnoot 2[tweede] link.\r\n\r\nDefinitie van ingesloten voetnoot [ingesloten voetnoottekst].\r\n\r\nDubbele voetnootreferentie[].\r\n\r\n[]: Voetnoot **Kan codering bevatten**\r\n\r\nEn meerdere alinea\'s.\r\n\r\n[]: Voetnoottekst.\r\n\r\n### [Definitielijsten](:.---)\r\n\r\nTermijn 1\r\n\r\n: Definitie 1\r\nMet onvolledige continuïteit.\r\n\r\nTerm 2 met *inline-notatie*\r\n\r\n: Definitie 2\r\n\r\nEen stukje code, onderdeel van definitie 2\r\n\r\nHet derde lid van de definitie 2.\r\n\r\n_Compacte stijl:_\r\n\r\nTermijn 1\r\nDefinitie 1\r\n\r\nTermijn 2\r\nDefinitie 2a\r\nDefinitie 2b\r\n\r\n### [Afkortingen](:.---)\r\n\r\nDit is een voorbeeld van een afkorting.\r\n\r\nDit wordt geconverteerd naar , maar houdt gedeeltelijke invoer intact, zoals enz.\r\n\r\n*[]: Hypertext-opmaaktaal\r\n\r\n### [Aangepaste containers](:.---)\r\n\r\n::: Waarschuwing\r\n*Hier zijn draken*\r\n:::', 'fond d\'Ã©cran.jpg', '2025-12-09 14:46:47', NULL, NULL);
INSERT INTO `news` (`id`, `title_ar`, `title_en`, `title_fr`, `title_es`, `title_de`, `title_nl`, `content_ar`, `content_en`, `content_fr`, `content_es`, `content_de`, `content_nl`, `image_url`, `published_at`, `category`, `youtube_url`) VALUES
(53, 'أهم نصائح شراء شقة في المغرب سنة 2025', 'The most important tips for buying an apartment in Morocco in 2025', 'Les conseils les plus importants pour acheter un appartement au Maroc en 2025', 'Los consejos más importantes para comprar un apartamento en Marruecos en 2025', 'Die wichtigsten Tipps für den Wohnungskauf in Marokko im Jahr 2025', 'De belangrijkste tips voor het kopen van een appartement in Marokko in 2025', '# أهم نصائح شراء شقة في المغرب سنة 2025\r\n\r\nشراء شقة لأول مرة يعتبر خطوة كبيرة، لذلك يجب الانتباه لعدد من النقاط المهمة لضمان سلامة العملية.\r\n\r\n## 1) التأكد من الحالة القانونية للعقار\r\nقبل توقيع أي عقد، تأكد من:\r\n- وجود **رسم عقاري** ( )\r\n- أن العقار غير مثقل بـ **رهن** أو **حجز**\r\n- هوية المالك الحقيقية\r\n\r\n## 2) زيارة الحي أكثر من مرة\r\nيفضل زيارة الحي في:\r\n- الصباح\r\n- المساء\r\n- نهاية الأسبوع  \r\nلكي تتعرف على مستوى الهدوء والأمان والخدمات.\r\n\r\n## 3) تحديد ميزانية واضحة\r\nضع ميزانية تشمل:\r\n- ثمن الشقة\r\n- مصاريف الموثق أو العدول\r\n- التسجيل والتحفيظ\r\n- الإصلاحات المحتملة\r\n\r\n## 4) نصيحة ذهبية\r\n**لا تدفع أي مبلغ قبل التأكد من صحة الوثائق عند مهني مختص.**\r\n\r\n---\r\n\r\n###  مثال لروابط مفيدة:\r\n- موقع الوكالة الوطنية للمحافظة العقارية: :...  \r\n- شرح التحفيظ العقاري خطوة بخطوة  \r\n', '#The most important tips for buying an apartment in Morocco in 2025\r\n\r\nBuying an apartment for the first time is a big step, so you must pay attention to a number of important points to ensure the safety of the process.\r\n\r\n## 1) Verify the legal status of the property\r\nBefore signing any contract, make sure:\r\n- The presence of a **real estate fee** ( )\r\n- That the property is not burdened by a **mortgage** or **seizure**\r\n- The owner\'s real identity\r\n\r\n## 2) Visit the neighborhood more than once\r\nIt is best to visit the neighborhood in:\r\n- Morning\r\n- Evening\r\n- The end of the week\r\nIn order to know the level of calm, safety and services.\r\n\r\n## 3) Determine a clear budget\r\nCreate a budget that includes:\r\n- The price of the apartment\r\n- Notary or notarial expenses\r\n- Recording and memorizing\r\n- Potential fixes\r\n\r\n##4) Golden tip\r\n**Do not pay any amount before verifying the authenticity of the documents with a specialized professional.**\r\n\r\n---\r\n\r\n### Example of useful links:\r\n- National Agency for Real Estate Conservation website::...\r\n- Explanation of real estate memorization step by step', '#Les conseils les plus importants pour acheter un appartement au Maroc en 2025\r\n\r\nAcheter un appartement pour la première fois est une étape importante, vous devez donc prêter attention à un certain nombre de points importants pour assurer la sécurité du processus.\r\n\r\n## 1) Vérifier le statut juridique du bien\r\nAvant de signer un contrat, assurez-vous :\r\n- La présence d\'une **frais immobilier** ( )\r\n- Que le bien n\'est pas grevé d\'une **hypothèque** ou d\'une **saisie**\r\n- La véritable identité du propriétaire\r\n\r\n## 2) Visitez le quartier plus d\'une fois\r\nIl est préférable de visiter le quartier à :\r\n- Matin\r\n- Soirée\r\n- La fin de la semaine  \r\nAfin de connaître le niveau de calme, de sécurité et de services.\r\n\r\n## 3) Déterminez un budget clair\r\nCréez un budget qui comprend :\r\n- Le prix de l\'appartement\r\n- Frais de notaire ou de notaire\r\n- Enregistrement et mémorisation\r\n- Correctifs potentiels\r\n\r\n##4) Astuce dorée\r\n**Ne payez aucun montant avant de vérifier l\'authenticité des documents auprès d\'un professionnel spécialisé.**\r\n\r\n---\r\n\r\n### Exemple de liens utiles :\r\n- Site de l\'Agence Nationale pour la Conservation des Immobiliers ::...  \r\n- Explication de la mémorisation immobilière étape par étape', '#Los consejos más importantes para comprar un apartamento en Marruecos en 2025\r\n\r\nComprar un apartamento por primera vez es un gran paso, por lo que es necesario prestar atención a una serie de puntos importantes para garantizar la seguridad del proceso.\r\n\r\n## 1) Verificar el estado legal del inmueble\r\nAntes de firmar cualquier contrato, asegúrese de:\r\n- La presencia de una **tarifa inmobiliaria** ( )\r\n- Que el inmueble no esté gravado con **hipoteca** o **embargo**\r\n- La verdadera identidad del propietario.\r\n\r\n## 2) Visita el barrio más de una vez\r\nLo mejor es visitar el barrio en:\r\n- mañana\r\n- Tarde\r\n- El fin de semana  \r\nPara conocer el nivel de tranquilidad, seguridad y servicios.\r\n\r\n## 3) Determinar un presupuesto claro\r\nCrea un presupuesto que incluya:\r\n- El precio del apartamento.\r\n- Gastos notariales o notariales\r\n- Grabación y memorización.\r\n- Posibles soluciones\r\n\r\n##4) Punta dorada\r\n**No abones ningún importe antes de verificar la autenticidad de los documentos con un profesional especializado.**\r\n\r\n---\r\n\r\n### Ejemplo de enlaces útiles:\r\n- Sitio web de la Agencia Nacional de Conservación de Bienes Inmuebles::...  \r\n- Explicación de la memorización de inmuebles paso a paso', '#Die wichtigsten Tipps für den Wohnungskauf in Marokko im Jahr 2025\r\n\r\nDer erste Wohnungskauf ist ein großer Schritt, daher müssen Sie einige wichtige Punkte beachten, um die Sicherheit des Prozesses zu gewährleisten.\r\n\r\n## 1) Überprüfen Sie den rechtlichen Status der Immobilie\r\nStellen Sie vor der Unterzeichnung eines Vertrags sicher:\r\n- Das Vorhandensein einer **Immobiliengebühr** ( )\r\n- Dass die Immobilie nicht durch eine **Hypothek** oder **Pfändung** belastet ist\r\n- Die wahre Identität des Eigentümers\r\n\r\n## 2) Besuchen Sie die Nachbarschaft mehr als einmal\r\nAm besten besuchen Sie die Nachbarschaft in:\r\n- Morgen\r\n- Abend\r\n- Das Ende der Woche  \r\nUm den Grad der Ruhe, Sicherheit und Dienstleistungen zu erfahren.\r\n\r\n## 3) Legen Sie ein klares Budget fest\r\nErstellen Sie ein Budget, das Folgendes umfasst:\r\n- Der Preis der Wohnung\r\n- Notar- oder Notarkosten\r\n- Aufzeichnen und Auswendiglernen\r\n- Mögliche Korrekturen\r\n\r\n##4) Goldener Tipp\r\n**Zahlen Sie keinen Betrag, bevor Sie die Echtheit der Dokumente nicht von einem spezialisierten Fachmann überprüft haben.**\r\n\r\n---\r\n\r\n### Beispiel für nützliche Links:\r\n- Website der Nationalen Agentur für Immobilienerhaltung::...  \r\n- Schritt-für-Schritt-Erklärung zum Auswendiglernen von Immobilien', '#De belangrijkste tips voor het kopen van een appartement in Marokko in 2025\r\n\r\nVoor de eerste keer een appartement kopen is een grote stap, dus u moet op een aantal belangrijke punten letten om de veiligheid van het proces te garanderen.\r\n\r\n## 1) Controleer de juridische status van het onroerend goed\r\nVoordat u een contract tekent, zorg ervoor dat:\r\n- De aanwezigheid van een **onroerendgoedvergoeding** ( )\r\n- Dat de woning niet belast wordt door een **hypotheek** of **beslag**\r\n- De echte identiteit van de eigenaar\r\n\r\n## 2) Bezoek de buurt meer dan eens\r\nJe kunt de buurt het beste bezoeken in:\r\n- Ochtend\r\n- Avond\r\n- Het einde van de week  \r\nOm het niveau van rust, veiligheid en dienstverlening te kennen.\r\n\r\n## 3) Bepaal een duidelijk budget\r\nMaak een begroting met daarin:\r\n- De prijs van het appartement\r\n- Notaris- of notariële kosten\r\n- Opnemen en onthouden\r\n- Mogelijke oplossingen\r\n\r\n##4) Gouden tip\r\n**Betaal geen enkel bedrag voordat u de authenticiteit van de documenten heeft gecontroleerd door een gespecialiseerde professional.**\r\n\r\n---\r\n\r\n### Voorbeeld van nuttige links:\r\n- Website van het Nationaal Agentschap voor het behoud van onroerend goed::...  \r\n- Uitleg van het memoriseren van onroerend goed stap voor stap', '1.PNG', '2025-12-10 15:53:38', 'tips', 'https://youtu.be/U1Vqha6VQyg?si=YbbCeK_3yKgVC0g_'),
(54, '# دليل شراء شقة في المغرب سنة 2025', '#Guide to buying an apartment in Morocco in 2025', '#Guide pour acheter un appartement au Maroc en 2025', '#Guía para comprar un apartamento en Marruecos en 2025', '#Leitfaden zum Kauf einer Wohnung in Marokko im Jahr 2025', '#Gids voor het kopen van een appartement in Marokko in 2025', '# دليل شراء شقة في المغرب سنة 2025\r\n\r\nشراء شقة هو قرار مهم يحتاج إلى دراسة جيدة. في هذا الدليل المختصر ستجد أهم النصائح والنقاط القانونية التي يجب الانتباه لها قبل توقيع العقد.\r\n\r\n---\r\n\r\n## 1) التأكد من الوثائق القانونية\r\nقبل القيام بأي خطوة، يجب التأكد من:\r\n\r\n- وجود **رسم عقاري ( )**  \r\n- أن العقار غير مثقل بـ رهن أو حجز  \r\n- هوية المالك الحقيقية  \r\n- مطابقة الشقة للمعايير الهندسية  \r\n\r\n **نصيحة مهمة:** لا توقع أي التزام قبل فحص الوثائق عند مهني مختص.\r\n\r\n---\r\n\r\n## 2) مقارنة أسعار الشقق حسب المدن (جدول)\r\nالجدول التالي يعطيك فكرة تقريبية عن متوسط أسعار الشقق في بعض المدن المغربية سنة 2025:\r\n\r\n المدينة         السعر للمتر مربع (تقريباً)  ملاحظات \r\n----------------------------------------------------\r\n الدار البيضاء  12,000 درهم                مرتفع في مركز المدينة \r\n الرباط         11,000 درهم                استقرار نسبي \r\n طنجة           10,000 درهم                تزايد الطلب السياحي \r\n الناظور        7,500 درهم                 أسعار مناسبة جداً \r\n فاس            6,000 درهم                 الأرخص بين المدن الكبرى \r\n\r\n---\r\n\r\n## 3) نصائح لزيارة الشقة\r\nعند زيارة الشقة تأكد من:\r\n\r\n- جودة الأبواب والنوافذ  \r\n- ضغط الماء  \r\n- إشراف الشمس والتهوية  \r\n- حالة السقف والجدران  \r\n- وجود المرافق الأساسية بالحي  \r\n\r\n---\r\n\r\n## 4) مصاريف إضافية يجب أن تعرفها\r\n\r\nيمكن أن تشمل عملية الشراء التكاليف التالية:\r\n\r\n- **أتعاب الموثق أو العدول**\r\n- **رسوم التحفيظ والتسجيل**\r\n- **احتمال وجود إصلاحات بسيطة**\r\n\r\n ** ملاحظة:** بعض المشاريع العقارية تضيف تكاليف خفية، لذلك اقرأ العقد جيداً.\r\n\r\n---\r\n\r\n## 5) روابط مفيدة\r\n- الوكالة الوطنية للمحافظة العقارية: :...  \r\n- كيفية حساب رسوم التحفيظ العقاري  \r\n- دليل الاستثمار العقاري في المغرب  \r\n\r\n---\r\n\r\n### خلاصة\r\nشراء شقة يحتاج صبراً ومعرفة دقيقة. كلما بحثت أكثر، حصلت على صفقة أفضل.\r\n\r\n', '#Guide to buying an apartment in Morocco in 2025\r\n\r\nBuying an apartment is an important decision that needs to be carefully considered.In this short guide, you will find the most important tips and legal points that you should pay attention to before signing the contract.\r\n\r\n---\r\n\r\n## 1) Verifying legal documents\r\nBefore taking any step, you must ensure:\r\n\r\n- The presence of **real estate fee ( )**\r\n- The property is not encumbered by a mortgage or lien\r\n- The owner\'s real identity\r\n- The apartment conforms to engineering standards\r\n\r\n**Important advice:** Do not sign any commitment before having the documents examined by a specialized professional.\r\n\r\n---\r\n\r\n## 2) Comparison of apartment prices by cities (table)\r\nThe following table gives you an approximate idea of the average prices of apartments in some Moroccan cities in 2025:\r\n\r\nCity Price per square meter (approx.) Notes\r\n----------------------------------------------------\r\nCasablanca 12,000 dirhams high in the city center\r\nRabat 11,000 dirhams, relative stability\r\nTangier 10,000 dirhams Increasing tourist demand\r\nNador 7,500 dirhams, very reasonable prices\r\nFez, 6,000 dirhams, is the cheapest among major cities\r\n\r\n---\r\n\r\n## 3) Tips for visiting the apartment\r\nWhen visiting the apartment make sure:\r\n\r\n- Quality of doors and windows\r\n- Water pressure\r\n- Sun supervision and ventilation\r\n- Condition of the ceiling and walls\r\n- The presence of basic facilities in the neighborhood\r\n\r\n---\r\n\r\n##4) Additional expenses you should know about\r\n\r\nYour purchase may include the following costs:\r\n\r\n- **Notary or notary fees**\r\n- **Memorization and registration fees**\r\n- **Possible minor repairs**\r\n\r\n**Note:** Some real estate projects add hidden costs, so read the contract carefully.\r\n\r\n---\r\n\r\n##5) Useful links\r\n- National Agency for Real Estate Conservation::...\r\n- How to calculate real estate registration fees\r\n- Real estate investment guide in Morocco\r\n\r\n---\r\n\r\n### Summary\r\nBuying an apartment requires patience and precise knowledge.The more you research, the better deal you get.', '#Guide pour acheter un appartement au Maroc en 2025\r\n\r\nL’achat d’un appartement est une décision importante qui doit être mûrement réfléchie.Dans ce petit guide, vous trouverez les conseils et les points juridiques les plus importants auxquels vous devez prêter attention avant de signer le contrat.\r\n\r\n---\r\n\r\n## 1) Vérification des documents juridiques\r\nAvant d’entreprendre toute démarche, vous devez vous assurer :\r\n\r\n- La présence de **frais immobiliers ( )**  \r\n- La propriété n\'est pas grevée d\'une hypothèque ou d\'un privilège  \r\n- La véritable identité du propriétaire  \r\n- L\'appartement est conforme aux normes d\'ingénierie  \r\n\r\n**Conseil important :** Ne signez aucun engagement avant de faire examiner les documents par un professionnel spécialisé.\r\n\r\n---\r\n\r\n## 2) Comparaison des prix des appartements par villes (tableau)\r\nLe tableau suivant vous donne une idée approximative des prix moyens des appartements dans certaines villes marocaines en 2025 :\r\n\r\nVille Prix au mètre carré (environ) Remarques \r\n----------------------------------------------------\r\nCasablanca 12 000 dirhams élevé en centre-ville \r\nRabat 11 000 dirhams, relative stabilité \r\nTanger 10 000 dirhams Demande touristique en hausse \r\nNador 7 500 dirhams, prix très raisonnables \r\nFès, 6 000 dirhams, est la moins chère des grandes villes \r\n\r\n---\r\n\r\n## 3) Conseils pour visiter l\'appartement\r\nLors de la visite de l\'appartement, assurez-vous :\r\n\r\n- Qualité des portes et fenêtres  \r\n- Pression de l\'eau  \r\n- Surveillance du soleil et ventilation  \r\n- Etat du plafond et des murs  \r\n- La présence d\'équipements de base dans le quartier  \r\n\r\n---\r\n\r\n##4) Dépenses supplémentaires à connaître\r\n\r\nVotre achat peut inclure les frais suivants :\r\n\r\n- **Frais de notaire ou de notaire**\r\n- **Frais de mémorisation et d\'inscription**\r\n- **Réparations mineures possibles**\r\n\r\n**Remarque :** Certains projets immobiliers ajoutent des coûts cachés, alors lisez attentivement le contrat.\r\n\r\n---\r\n\r\n##5) Liens utiles\r\n- Agence Nationale pour la Conservation des Biens Immobiliers : :...  \r\n- Comment calculer les frais d\'enregistrement immobilier  \r\n- Guide d\'investissement immobilier au Maroc  \r\n\r\n---\r\n\r\n### Résumé\r\nAcheter un appartement demande de la patience et des connaissances précises.Plus vous recherchez, meilleure est votre offre.', '#Guía para comprar un apartamento en Marruecos en 2025\r\n\r\nComprar un apartamento es una decisión importante que hay que considerar detenidamente.En esta breve guía encontrarás los consejos y puntos legales más importantes a los que debes prestar atención antes de firmar el contrato.\r\n\r\n---\r\n\r\n## 1) Verificación de documentos legales\r\nAntes de dar cualquier paso, debes asegurarte de:\r\n\r\n- La presencia de **tarifa inmobiliaria ( )**  \r\n- La propiedad no está gravada con hipoteca o gravamen  \r\n- La verdadera identidad del propietario.  \r\n- El apartamento cumple con los estándares de ingeniería.\r\n\r\n**Consejo importante:** No firme ningún compromiso antes de que un profesional especializado examine los documentos.\r\n\r\n---\r\n\r\n## 2) Comparación de precios de apartamentos por ciudades (tabla)\r\nLa siguiente tabla da una idea aproximada de los precios medios de los apartamentos en algunas ciudades marroquíes en 2025:\r\n\r\nCiudad Precio por metro cuadrado (aprox.) Notas \r\n----------------------------------------------------\r\nCasablanca 12.000 dirhams en lo alto del centro de la ciudad \r\nRabat 11.000 dírhams, relativa estabilidad \r\nTánger 10.000 dírhams La creciente demanda turística \r\nNador 7.500 dirhams, precios muy razonables. \r\nFez, 6.000 dirhams, es la más barata entre las grandes ciudades \r\n\r\n---\r\n\r\n## 3) Consejos para visitar el apartamento\r\nAl visitar el apartamento asegúrese de:\r\n\r\n- Calidad de puertas y ventanas.  \r\n- Presión del agua  \r\n- Supervisión solar y ventilación.  \r\n- Estado del techo y paredes.  \r\n- La presencia de servicios básicos en el barrio.  \r\n\r\n---\r\n\r\n##4) Gastos adicionales que debes conocer\r\n\r\nSu compra puede incluir los siguientes costos:\r\n\r\n- **Honorarios de notario o notario**\r\n- **Cuotas de memorización e inscripción**\r\n- **Posibles reparaciones menores**\r\n\r\n**Nota:** Algunos proyectos inmobiliarios añaden costos ocultos, así que lea el contrato con atención.\r\n\r\n---\r\n\r\n##5) Enlaces útiles\r\n- Agencia Nacional de Conservación de Bienes Inmuebles::...  \r\n- Cómo calcular los honorarios de registro de bienes raíces.  \r\n- Guía de inversión inmobiliaria en Marruecos  \r\n\r\n---\r\n\r\n### Resumen\r\nComprar un apartamento requiere paciencia y conocimientos precisos.Cuanto más investigues, mejor trato obtendrás.', '#Leitfaden zum Kauf einer Wohnung in Marokko im Jahr 2025\r\n\r\nDer Kauf einer Wohnung ist eine wichtige Entscheidung, die sorgfältig abgewogen werden muss.In diesem kurzen Ratgeber finden Sie die wichtigsten Tipps und rechtlichen Punkte, die Sie vor Vertragsabschluss beachten sollten.\r\n\r\n---\r\n\r\n## 1) Überprüfung von Rechtsdokumenten\r\nBevor Sie einen Schritt unternehmen, müssen Sie Folgendes sicherstellen:\r\n\r\n- Das Vorhandensein einer **Immobiliengebühr ( )**  \r\n- Die Immobilie ist nicht mit einer Hypothek oder einem Pfandrecht belastet  \r\n- Die wahre Identität des Eigentümers  \r\n- Die Wohnung entspricht den technischen Standards  \r\n\r\n**Wichtiger Hinweis:** Unterzeichnen Sie keine Verpflichtungserklärung, bevor Sie die Dokumente von einem spezialisierten Fachmann prüfen lassen.\r\n\r\n---\r\n\r\n## 2) Vergleich der Wohnungspreise nach Städten (Tabelle)\r\nDie folgende Tabelle gibt Ihnen einen ungefähren Überblick über die durchschnittlichen Wohnungspreise in einigen marokkanischen Städten im Jahr 2025:\r\n\r\nStadtpreis pro Quadratmeter (ca.) Hinweise \r\n----------------------------------------------------\r\nCasablanca 12.000 Dirham hoch im Stadtzentrum \r\nRabat 11.000 Dirham, relative Stabilität \r\nTanger 10.000 Dirham Steigende touristische Nachfrage \r\nNador 7.500 Dirham, sehr vernünftige Preise \r\nFes ist mit 6.000 Dirham die günstigste unter den Großstädten \r\n\r\n---\r\n\r\n## 3) Tipps zur Wohnungsbesichtigung\r\nStellen Sie bei der Besichtigung der Wohnung sicher:\r\n\r\n- Qualität der Türen und Fenster  \r\n- Wasserdruck  \r\n- Sonnenschutz und Belüftung  \r\n- Zustand der Decke und Wände  \r\n- Das Vorhandensein grundlegender Einrichtungen in der Nachbarschaft  \r\n\r\n---\r\n\r\n##4) Zusätzliche Kosten, die Sie kennen sollten\r\n\r\nIhr Kauf kann folgende Kosten beinhalten:\r\n\r\n- **Notar bzw. Notargebühren**\r\n- **Auswendiglernen und Registrierungsgebühren**\r\n- **Mögliche kleinere Reparaturen**\r\n\r\n**Hinweis:** Bei einigen Immobilienprojekten kommen versteckte Kosten hinzu, lesen Sie den Vertrag daher sorgfältig durch.\r\n\r\n---\r\n\r\n##5) Nützliche Links\r\n- Nationale Agentur für Immobilienerhaltung::...  \r\n- So berechnen Sie die Registrierungsgebühren für Immobilien  \r\n- Leitfaden für Immobilieninvestitionen in Marokko  \r\n\r\n---\r\n\r\n### Zusammenfassung\r\nDer Kauf einer Wohnung erfordert Geduld und genaue Kenntnisse.Je mehr Sie recherchieren, desto bessere Angebote erhalten Sie.', '#Gids voor het kopen van een appartement in Marokko in 2025\r\n\r\nHet kopen van een appartement is een belangrijke beslissing die zorgvuldig moet worden overwogen.In deze korte handleiding vindt u de belangrijkste tips en juridische punten waar u op moet letten voordat u het contract tekent.\r\n\r\n---\r\n\r\n## 1) Juridische documenten verifiëren\r\nVoordat u enige stap zet, moet u ervoor zorgen dat:\r\n\r\n- De aanwezigheid van **onroerendgoedvergoeding ( )**  \r\n- Op de woning rust geen hypotheek of pandrecht  \r\n- De echte identiteit van de eigenaar  \r\n- Het appartement voldoet aan de bouwkundige normen  \r\n\r\n**Belangrijk advies:** Onderteken geen enkele verbintenis voordat u de documenten heeft laten onderzoeken door een gespecialiseerde professional.\r\n\r\n---\r\n\r\n## 2) Vergelijking van appartementprijzen per stad (tabel)\r\nDe volgende tabel geeft u bij benadering een idee van de gemiddelde prijzen van appartementen in sommige Marokkaanse steden in 2025:\r\n\r\nStad Prijs per vierkante meter (ca.) Opmerkingen \r\n-----------------------------------------------\r\nCasablanca 12.000 dirham hoog in het stadscentrum \r\nRabat 11.000 dirham, relatieve stabiliteit \r\nTanger 10.000 dirham Toenemende vraag van toeristen \r\nNador 7.500 dirham, zeer redelijke prijzen \r\nFez is met 6.000 dirham de goedkoopste van de grote steden \r\n\r\n---\r\n\r\n## 3) Tips voor het bezoeken van het appartement\r\nZorg er bij een bezoek aan het appartement voor dat:\r\n\r\n- Kwaliteit van deuren en ramen  \r\n- Waterdruk  \r\n- Zontoezicht en ventilatie  \r\n- Staat van het plafond en de muren  \r\n- De aanwezigheid van basisvoorzieningen in de buurt  \r\n\r\n---\r\n\r\n##4) Bijkomende uitgaven waarvan u op de hoogte moet zijn\r\n\r\nUw aankoop kan de volgende kosten omvatten:\r\n\r\n- **Notaris- of notariskosten**\r\n- **Memorisatie- en registratiekosten**\r\n- **Mogelijke kleine reparaties**\r\n\r\n**Opmerking:** Sommige vastgoedprojecten brengen verborgen kosten met zich mee, dus lees het contract aandachtig door.\r\n\r\n---\r\n\r\n##5) Nuttige links\r\n- Nationaal Agentschap voor Vastgoedbehoud::...  \r\n- Hoe de registratiekosten voor onroerend goed te berekenen  \r\n- Gids voor vastgoedbeleggingen in Marokko  \r\n\r\n---\r\n\r\n### Samenvatting\r\nHet kopen van een appartement vereist geduld en nauwkeurige kennis.Hoe meer je onderzoekt, hoe beter de deal die je krijgt.', '2.PNG', '2025-12-10 15:57:57', 'market', 'https://youtu.be/U1Vqha6VQyg?si=YbbCeK_3yKgVC0g_'),
(57, '# دليل شراء شقة في المغرب سنة 2025 ', '#Guide to buying an apartment in Morocco in 2025', '#Guide pour acheter un appartement au Maroc en 2025', '#Guía para comprar un apartamento en Marruecos en 2025', '#Leitfaden zum Kauf einer Wohnung in Marokko im Jahr 2025', '#Gids voor het kopen van een appartement in Marokko in 2025', '# دليل شراء شقة في المغرب سنة 2025\r\n\r\nقبل اتخاذ قرار الشراء، من المهم معرفة مجموعة من النقاط الأساسية لضمان اتخاذ القرار الصحيح.\r\n\r\n---\r\n\r\n## 1) التأكد من الوثائق القانونية\r\n\r\n- وجود رسم عقاري.\r\n- التأكد من هوية المالك.\r\n- مطابقة المساحة الحقيقية للوثائق.\r\n- زيارة الشقة مع خبير.\r\n\r\n**ملاحظة:** ينصح دائماً بالاستعانة بموثق أو محامٍ متخصص قبل توقيع العقد.\r\n\r\n---\r\n\r\n## 2) مقارنة أسعار الشقق حسب المدن (جدول)\r\n\r\n المدينة         ثمن المتر (درهم)  ملاحظات                 \r\n------------------------------------------------------------\r\n الدار البيضاء  12,000            مرتفع بسبب الطلب الكبير \r\n الرباط         11,000            استقرار نسبي            \r\n مراكش          10,000            مناسب للاستثمار السياحي \r\n الناظور        7,500             أسعار معقولة جداً       \r\n\r\n---\r\n\r\n## 3) نصائح عند زيارة الشقة\r\n\r\n1. التأكد من جودة الأبواب والنوافذ.  \r\n2. اختبار ضغط الماء.  \r\n3. التأكد من وجود تهوية جيدة.  \r\n4. مراقبة الإضاءة الطبيعية داخل الغرف.  \r\n\r\n---\r\n\r\n## 4) مثال على رابط وصورة\r\n\r\n### رابط مهم:\r\n[بوابة المحافظة العقارية](:...)\r\n\r\n### صورة تجريبية:\r\n![صورة شقة](:..800400)\r\n\r\n---\r\n\r\n## 5) مثال على كود برمجي\r\n\r\n```\r\n (, ) \r\n    * ;\r\n\r\n\r\n.((80, 12000));  مثال لحساب ثمن شقة\r\n', '#Guide to buying an apartment in Morocco in 2025\r\n\r\nBefore making a purchase decision, it is important to know a set of basic points to ensure you make the right decision.\r\n\r\n---\r\n\r\n## 1) Verifying legal documents\r\n\r\n- There is a real estate fee.\r\n- Verifying the owner’s identity.\r\n- Matching the actual size of documents.\r\n- Visit the apartment with an expert.\r\n\r\n**Note:** It is always recommended to seek the help of a notary or a specialized lawyer before signing the contract.\r\n\r\n---\r\n\r\n## 2) Comparison of apartment prices by cities (table)\r\n\r\nCity price per meter (AED) Notes\r\n------------------------------------------------------------\r\nCasablanca 12,000 is high due to high demand\r\nRabat 11,000 Relative stability\r\nMarrakesh 10,000 is suitable for tourist investment\r\nNador 7,500 Very reasonable prices\r\n\r\n---\r\n\r\n## 3) Tips when visiting the apartment\r\n\r\n1. Ensure the quality of doors and windows.\r\n2. Water pressure test.\r\n3. Ensure there is good ventilation.\r\n4. Monitor natural lighting inside rooms.\r\n\r\n---\r\n\r\n##4) Example link and image\r\n\r\n### Important link:\r\n[Real Estate Governorate Portal](:...)\r\n\r\n### Test image:\r\n[Apartment photo](:..800400)\r\n\r\n---\r\n\r\n## 5) Example of code\r\n\r\n```\r\n(, )\r\n* ;\r\n\r\n\r\n.((80, 12000));Example of calculating the price of an apartment', '#Guide pour acheter un appartement au Maroc en 2025\r\n\r\nAvant de prendre une décision d’achat, il est important de connaître un ensemble de points de base pour être sûr de prendre la bonne décision.\r\n\r\n---\r\n\r\n## 1) Vérification des documents juridiques\r\n\r\n- Il y a des frais immobiliers.\r\n- Vérification de l\'identité du propriétaire.\r\n- Correspondance à la taille réelle des documents.\r\n- Visitez l\'appartement avec un expert.\r\n\r\n**Remarque :** Il est toujours recommandé de demander l\'aide d\'un notaire ou d\'un avocat spécialisé avant de signer le contrat.\r\n\r\n---\r\n\r\n## 2) Comparaison des prix des appartements par villes (tableau)\r\n\r\nPrix ​​ville par mètre (AED) Remarques                 \r\n------------------------------------------------------------\r\nCasablanca 12 000 est élevé en raison de la forte demande \r\nRabat 11 000 Stabilité relative            \r\nMarrakech 10 000 convient à l\'investissement touristique \r\nNador 7 500 Prix très raisonnables       \r\n\r\n---\r\n\r\n## 3) Conseils pour visiter l\'appartement\r\n\r\n1. Assurer la qualité des portes et fenêtres.\r\n2. Test de pression de l\'eau.\r\n3. Assurez-vous qu\'il y a une bonne ventilation.\r\n4. Surveillez l’éclairage naturel à l’intérieur des pièces.\r\n\r\n---\r\n\r\n##4) Exemple de lien et d\'image\r\n\r\n### Lien important :\r\n[Portail du gouvernorat immobilier](:...)\r\n\r\n### Image de test :\r\n[Photo de l\'appartement](:..800400)\r\n\r\n---\r\n\r\n## 5) Exemple de code\r\n\r\n```\r\n(, ) \r\n* ;\r\n\r\n\r\n.((80, 12000));Exemple de calcul du prix d\'un appartement', '#Guía para comprar un apartamento en Marruecos en 2025\r\n\r\nAntes de tomar una decisión de compra, es importante conocer una serie de puntos básicos para asegurarte de tomar la decisión correcta.\r\n\r\n---\r\n\r\n## 1) Verificación de documentos legales\r\n\r\n- Hay una tarifa inmobiliaria.\r\n- Verificar la identidad del propietario.\r\n- Coincidir con el tamaño real de los documentos.\r\n- Visita el apartamento con un experto.\r\n\r\n**Nota:** Siempre se recomienda buscar la ayuda de un notario o un abogado especializado antes de firmar el contrato.\r\n\r\n---\r\n\r\n## 2) Comparación de precios de apartamentos por ciudades (tabla)\r\n\r\nPrecio urbano por metro (AED) Notas                 \r\n------------------------------------------------------\r\nCasablanca 12.000 es alto debido a la gran demanda \r\nRabat 11.000 Estabilidad relativa            \r\nMarrakech 10.000 es propicia para la inversión turística \r\nNador 7.500 Precios muy razonables       \r\n\r\n---\r\n\r\n## 3) Consejos a la hora de visitar el apartamento\r\n\r\n1. Garantizar la calidad de puertas y ventanas.\r\n2. Prueba de presión de agua.\r\n3. Asegúrese de que haya buena ventilación.\r\n4. Vigilar la iluminación natural en el interior de las habitaciones.\r\n\r\n---\r\n\r\n##4) Ejemplo de enlace e imagen\r\n\r\n### Enlace importante:\r\n[Portal de la Gobernación Inmobiliaria](:...)\r\n\r\n### Imagen de prueba:\r\n[Foto del apartamento](:..800400)\r\n\r\n---\r\n\r\n## 5) Ejemplo de código\r\n\r\n```\r\n(,) \r\n* ;\r\n\r\n\r\n.((80, 12000));Ejemplo de cálculo del precio de un apartamento.', '#Leitfaden zum Kauf einer Wohnung in Marokko im Jahr 2025\r\n\r\nBevor Sie eine Kaufentscheidung treffen, ist es wichtig, einige grundlegende Punkte zu kennen, um sicherzustellen, dass Sie die richtige Entscheidung treffen.\r\n\r\n---\r\n\r\n## 1) Überprüfung von Rechtsdokumenten\r\n\r\n- Es fällt eine Immobiliengebühr an.\r\n- Überprüfung der Identität des Eigentümers.\r\n- Anpassung an die tatsächliche Größe von Dokumenten.\r\n- Besichtigung der Wohnung mit einem Experten.\r\n\r\n**Hinweis:** Es wird immer empfohlen, vor der Vertragsunterzeichnung die Hilfe eines Notars oder eines spezialisierten Anwalts in Anspruch zu nehmen.\r\n\r\n---\r\n\r\n## 2) Vergleich der Wohnungspreise nach Städten (Tabelle)\r\n\r\nStadtpreis pro Meter (AED) Hinweise                 \r\n------------------------------------------------------------\r\nCasablanca 12.000 ist aufgrund der hohen Nachfrage hoch \r\nRabat 11.000 Relative Stabilität            \r\nMarrakesch 10.000 eignet sich für touristische Investitionen \r\nNador 7.500 Sehr vernünftige Preise       \r\n\r\n---\r\n\r\n## 3) Tipps bei der Wohnungsbesichtigung\r\n\r\n1. Stellen Sie die Qualität von Türen und Fenstern sicher.\r\n2. Wasserdrucktest.\r\n3. Sorgen Sie für eine gute Belüftung.\r\n4. Überwachen Sie die natürliche Beleuchtung in Räumen.\r\n\r\n---\r\n\r\n##4) Beispiellink und Bild\r\n\r\n### Wichtiger Link:\r\n[Portal des Immobiliengouvernements](:...)\r\n\r\n### Testbild:\r\n[Wohnungsfoto](:..800400)\r\n\r\n---\r\n\r\n## 5) Beispielcode\r\n\r\n„\r\n(, ) \r\n* ;\r\n\r\n\r\n.((80, 12000));  Beispiel für die Berechnung des Wohnungspreises', '#Gids voor het kopen van een appartement in Marokko in 2025\r\n\r\nVoordat u een aankoopbeslissing neemt, is het belangrijk om een aantal basispunten te kennen, zodat u zeker weet dat u de juiste beslissing neemt.\r\n\r\n---\r\n\r\n## 1) Juridische documenten verifiëren\r\n\r\n- Er is een vastgoedvergoeding.\r\n- Het verifiëren van de identiteit van de eigenaar.\r\n- Overeenkomen met de werkelijke grootte van documenten.\r\n- Bezoek het appartement met een deskundige.\r\n\r\n**Opmerking:** Het wordt altijd aanbevolen om de hulp in te roepen van een notaris of een gespecialiseerde advocaat voordat u het contract ondertekent.\r\n\r\n---\r\n\r\n## 2) Vergelijking van appartementprijzen per stad (tabel)\r\n\r\nStadsprijs per meter (AED) Opmerkingen                 \r\n------------------------------------------------------\r\nCasablanca 12.000 is hoog vanwege de grote vraag \r\nRabat 11.000 Relatieve stabiliteit            \r\nMarrakesh 10.000 is geschikt voor toeristische investeringen \r\nNador 7.500 Zeer redelijke prijzen       \r\n\r\n---\r\n\r\n## 3) Tips bij een bezoek aan het appartement\r\n\r\n1. Zorg voor de kwaliteit van deuren en ramen.\r\n2. Waterdruktest.\r\n3. Zorg voor goede ventilatie.\r\n4. Houd toezicht op de natuurlijke verlichting in kamers.\r\n\r\n---\r\n\r\n##4) Voorbeeldlink en afbeelding\r\n\r\n### Belangrijke link:\r\n[Real Estate Gouvernement Portal](:...)\r\n\r\n### Testafbeelding:\r\n[Appartementfoto](:..800400)\r\n\r\n---\r\n\r\n## 5) Voorbeeld van code\r\n\r\n```\r\n(, ) \r\n*;\r\n\r\n\r\n.((80, 12000));Voorbeeld van het berekenen van de prijs van een appartement', 'logo512.PNG', '2025-12-11 14:53:01', 'market', 'https://youtu.be/fOIORJxRzg0?si=mapsvV-_52TRvk1j'),
(58, '## 2) مقارنة أسعار الشقق حسب المدن (جدول)', '## 2) Comparison of apartment prices by cities (table)', '## 2) Comparaison des prix des appartements par villes (tableau)', '## 2) Comparación de precios de apartamentos por ciudades (tabla)', '## 2) Vergleich der Wohnungspreise nach Städten (Tabelle)', '## 2) Vergelijking van appartementprijzen per stad (tabel)', '## 2) مقارنة أسعار الشقق حسب المدن (جدول)\r\n\r\n| المدينة        | ثمن المتر (درهم) | ملاحظات                 |\r\n|----------------|------------------|--------------------------|\r\n| الدار البيضاء | 12,000           | مرتفع بسبب الطلب الكبير |\r\n| الرباط        | 11,000           | استقرار نسبي            |\r\n| مراكش         | 10,000           | مناسب للاستثمار السياحي |\r\n| الناظور       | 7,500            | أسعار معقولة جداً       |\r\n', '## 2) Comparison of apartment prices by cities (table)\r\n\r\n|City |Price per meter (AED) |Notes |\r\n|----------------|------------------|--------------------------|\r\n|Casablanca |12,000 |High due to high demand\r\n|Rabat |11,000 |Relative stability\r\n|Marrakesh |10,000 |Suitable for tourism investment\r\n|Nador |7,500 |Very reasonable prices', '## 2) Comparaison des prix des appartements par villes (tableau)\r\n\r\n|Ville |Prix ​​au mètre (AED) |Remarques |\r\n|----------------|------------------|-------------------------------|\r\n|Casablanca |12 000 |Élevé en raison de la forte demande\r\n|Rabat |11 000 |Stabilité relative\r\n|Marrakech |10 000 |Convient à l\'investissement touristique\r\n|Nador |7 500 |Prix ​​très raisonnables', '## 2) Comparación de precios de apartamentos por ciudades (tabla)\r\n\r\n|Ciudad |Precio por metro (AED) |Notas |\r\n|----------------|------------------|--------------------------|\r\n|Casa Blanca |12.000 |Alto debido a la alta demanda\r\n|Rabat |11.000 |Estabilidad relativa\r\n|Marrakech |10.000 |Apto para inversión turística.\r\n|Nador |7.500 |Precios muy razonables', '## 2) Vergleich der Wohnungspreise nach Städten (Tabelle)\r\n\r\n|Stadt |Preis pro Meter (AED) |Notizen |\r\n|----------------|------------------|------------|\r\n|Casablanca |12.000 |Hoch aufgrund der hohen Nachfrage\r\n|Rabat |11.000 |Relative Stabilität\r\n|Marrakesch |10.000 |Geeignet für Tourismusinvestitionen\r\n|Nador |7.500 |Sehr vernünftige Preise', '## 2) Vergelijking van appartementprijzen per stad (tabel)\r\n\r\n|Stad |Prijs per meter (AED) |Opmerkingen |\r\n|---------------|------------------|-----------------------|\r\n|Casablanca |12.000 |Hoog vanwege de grote vraag\r\n|Rabat |11.000 |Relatieve stabiliteit\r\n|Marrakech |10.000 |Geschikt voor toeristische investeringen\r\n|Nador |7.500 |Zeer redelijke prijzen', '2.PNG', '2025-12-11 16:00:43', 'market', 'https://youtu.be/fOIORJxRzg0?si=mapsvV-_52TRvk1j'),
(59, '# دليل شراء شقة في المغرب سنة 2025', '#Guide to buying an apartment in Morocco in 2025', '#Guide pour acheter un appartement au Maroc en 2025', '#Guía para comprar un apartamento en Marruecos en 2025', '#Leitfaden zum Kauf einer Wohnung in Marokko im Jahr 2025', '#Gids voor het kopen van een appartement in Marokko in 2025', '# دليل شراء شقة في المغرب سنة 2025\r\n\r\nقبل اتخاذ قرار الشراء، من المهم معرفة مجموعة من النقاط الأساسية لضمان اتخاذ القرار الصحيح.\r\n\r\n---\r\n\r\n## 1) التأكد من الوثائق القانونية\r\n\r\n- وجود رسم عقاري.\r\n- التأكد من هوية المالك.\r\n- مطابقة المساحة الحقيقية للوثائق.\r\n- زيارة الشقة مع خبير.\r\n\r\n**ملاحظة:** ينصح دائماً بالاستعانة بموثق أو محامٍ متخصص قبل توقيع العقد.\r\n\r\n---\r\n\r\n## 2) مقارنة أسعار الشقق حسب المدن (جدول)\r\n\r\n| المدينة        | ثمن المتر (درهم) | ملاحظات                 |\r\n|----------------|------------------|--------------------------|\r\n| الدار البيضاء | 12,000           | مرتفع بسبب الطلب الكبير |\r\n| الرباط        | 11,000           | استقرار نسبي            |\r\n| مراكش         | 10,000           | مناسب للاستثمار السياحي |\r\n| الناظور       | 7,500            | أسعار معقولة جداً       |\r\n\r\n---\r\n\r\n## 3) نصائح عند زيارة الشقة\r\n\r\n1. التأكد من جودة الأبواب والنوافذ.  \r\n2. اختبار ضغط الماء.  \r\n3. التأكد من وجود تهوية جيدة.  \r\n4. مراقبة الإضاءة الطبيعية داخل الغرف.  \r\n\r\n---\r\n\r\n## 4) مثال على رابط وصورة\r\n\r\n### رابط مهم:\r\n[بوابة المحافظة العقارية](https://www.ancfcc.gov.ma/)\r\n\r\n### صورة تجريبية:\r\n![صورة شقة](https://via.placeholder.com/800x400)\r\n\r\n---\r\n\r\n## 5) مثال على كود برمجي\r\n\r\n```js\r\nfunction calculatePrice(area, pricePerMeter) {\r\n  return area * pricePerMeter;\r\n}\r\n\r\nconsole.log(calculatePrice(80, 12000)); // مثال لحساب ثمن شقة\r\n', '#Guide to buying an apartment in Morocco in 2025\r\n\r\nBefore making a purchase decision, it is important to know a set of basic points to ensure you make the right decision.\r\n\r\n---\r\n\r\n## 1) Verifying legal documents\r\n\r\n- There is a real estate fee.\r\n- Verifying the owner’s identity.\r\n- Matching the actual size of documents.\r\n- Visit the apartment with an expert.\r\n\r\n**Note:** It is always recommended to seek the help of a notary or a specialized lawyer before signing the contract.\r\n\r\n---\r\n\r\n## 2) Comparison of apartment prices by cities (table)\r\n\r\n|City |Price per meter (AED) |Notes |\r\n|----------------|------------------|--------------------------|\r\n|Casablanca |12,000 |High due to high demand\r\n|Rabat |11,000 |Relative stability\r\n|Marrakesh |10,000 |Suitable for tourism investment\r\n|Nador |7,500 |Very reasonable prices\r\n\r\n---\r\n\r\n## 3) Tips when visiting the apartment\r\n\r\n1. Ensure the quality of doors and windows.\r\n2. Water pressure test.\r\n3. Ensure there is good ventilation.\r\n4. Monitor natural lighting inside rooms.\r\n\r\n---\r\n\r\n##4) Example link and image\r\n\r\n### Important link:\r\n[Real Estate Governorate Portal](https://www.ancfcc.gov.ma/)\r\n\r\n### Test image:\r\n[Apartment Image](https://via.placeholder.com/800x400)!\r\n\r\n---\r\n\r\n## 5) Example of code\r\n\r\n```js\r\nfunction calculatePrice(area, pricePerMeter) {\r\nreturn area * pricePerMeter;\r\n}\r\n\r\nconsole.log(calculatePrice(80, 12000));// Example of calculating the price of an apartment', '#Guide pour acheter un appartement au Maroc en 2025\r\n\r\nAvant de prendre une décision d’achat, il est important de connaître un ensemble de points de base pour être sûr de prendre la bonne décision.\r\n\r\n---\r\n\r\n## 1) Vérification des documents juridiques\r\n\r\n- Il y a des frais immobiliers.\r\n- Vérification de l\'identité du propriétaire.\r\n- Correspondance à la taille réelle des documents.\r\n- Visitez l\'appartement avec un expert.\r\n\r\n**Remarque :** Il est toujours recommandé de demander l\'aide d\'un notaire ou d\'un avocat spécialisé avant de signer le contrat.\r\n\r\n---\r\n\r\n## 2) Comparaison des prix des appartements par villes (tableau)\r\n\r\n|Ville |Prix ​​au mètre (AED) |Remarques |\r\n|----------------|------------------|-------------------------------|\r\n|Casablanca |12 000 |Élevé en raison de la forte demande\r\n|Rabat |11 000 |Stabilité relative\r\n|Marrakech |10 000 |Convient à l\'investissement touristique\r\n|Nador |7 500 |Prix très raisonnables\r\n\r\n---\r\n\r\n## 3) Conseils pour visiter l\'appartement\r\n\r\n1. Assurer la qualité des portes et fenêtres.\r\n2. Test de pression de l\'eau.\r\n3. Assurez-vous qu\'il y a une bonne ventilation.\r\n4. Surveillez l’éclairage naturel à l’intérieur des pièces.\r\n\r\n---\r\n\r\n##4) Exemple de lien et d\'image\r\n\r\n### Lien important :\r\n[Portail du gouvernorat immobilier](https://www.ancfcc.gov.ma/)\r\n\r\n### Image de test :\r\n[Image de l\'appartement](https://via.placeholder.com/800x400) !\r\n\r\n---\r\n\r\n## 5) Exemple de code\r\n\r\n```js\r\nfonction calculerPrix(zone, prixParMètre) {\r\nzone de retour * prixParMètre ;\r\n}\r\n\r\nconsole.log(calculatePrice(80, 12000));// Exemple de calcul du prix d\'un appartement', '#Guía para comprar un apartamento en Marruecos en 2025\r\n\r\nAntes de tomar una decisión de compra, es importante conocer una serie de puntos básicos para asegurarte de tomar la decisión correcta.\r\n\r\n---\r\n\r\n## 1) Verificación de documentos legales\r\n\r\n- Hay una tarifa inmobiliaria.\r\n- Verificar la identidad del propietario.\r\n- Coincidir con el tamaño real de los documentos.\r\n- Visita el apartamento con un experto.\r\n\r\n**Nota:** Siempre se recomienda buscar la ayuda de un notario o un abogado especializado antes de firmar el contrato.\r\n\r\n---\r\n\r\n## 2) Comparación de precios de apartamentos por ciudades (tabla)\r\n\r\n|Ciudad |Precio por metro (AED) |Notas |\r\n|----------------|------------------|--------------------------|\r\n|Casa Blanca |12.000 |Alto debido a la alta demanda\r\n|Rabat |11.000 |Estabilidad relativa\r\n|Marrakech |10.000 |Apto para inversión turística.\r\n|Nador |7.500 |Precios muy razonables\r\n\r\n---\r\n\r\n## 3) Consejos a la hora de visitar el apartamento\r\n\r\n1. Garantizar la calidad de puertas y ventanas.\r\n2. Prueba de presión de agua.\r\n3. Asegúrese de que haya buena ventilación.\r\n4. Vigilar la iluminación natural en el interior de las habitaciones.\r\n\r\n---\r\n\r\n##4) Ejemplo de enlace e imagen\r\n\r\n### Enlace importante:\r\n[Portal de la Gobernación de Bienes Raíces](https://www.ancfcc.gov.ma/)\r\n\r\n### Imagen de prueba:\r\n[Imagen del apartamento](https://via.placeholder.com/800x400)!\r\n\r\n---\r\n\r\n## 5) Ejemplo de código\r\n\r\n```js\r\nfunción calcularPrecio(área, precioPorMetro) {\r\nárea de retorno * precioPorMetro;\r\n}\r\n\r\nconsole.log(calcularPrecio(80, 12000));// Ejemplo de cálculo del precio de un apartamento.', '#Leitfaden zum Kauf einer Wohnung in Marokko im Jahr 2025\r\n\r\nBevor Sie eine Kaufentscheidung treffen, ist es wichtig, einige grundlegende Punkte zu kennen, um sicherzustellen, dass Sie die richtige Entscheidung treffen.\r\n\r\n---\r\n\r\n## 1) Überprüfung von Rechtsdokumenten\r\n\r\n- Es fällt eine Immobiliengebühr an.\r\n- Überprüfung der Identität des Eigentümers.\r\n- Anpassung an die tatsächliche Größe von Dokumenten.\r\n- Besichtigung der Wohnung mit einem Experten.\r\n\r\n**Hinweis:** Es wird immer empfohlen, vor der Vertragsunterzeichnung die Hilfe eines Notars oder eines spezialisierten Anwalts in Anspruch zu nehmen.\r\n\r\n---\r\n\r\n## 2) Vergleich der Wohnungspreise nach Städten (Tabelle)\r\n\r\n|Stadt |Preis pro Meter (AED) |Notizen |\r\n|----------------|------------------|------------|\r\n|Casablanca |12.000 |Hoch aufgrund der hohen Nachfrage\r\n|Rabat |11.000 |Relative Stabilität\r\n|Marrakesch |10.000 |Geeignet für Tourismusinvestitionen\r\n|Nador |7.500 |Sehr vernünftige Preise\r\n\r\n---\r\n\r\n## 3) Tipps bei der Wohnungsbesichtigung\r\n\r\n1. Stellen Sie die Qualität von Türen und Fenstern sicher.\r\n2. Wasserdrucktest.\r\n3. Sorgen Sie für eine gute Belüftung.  \r\n4. Überwachen Sie die natürliche Beleuchtung in Räumen.  \r\n\r\n---\r\n\r\n##4) Beispiellink und Bild\r\n\r\n### Wichtiger Link:\r\n[Portal des Immobiliengouvernements](https://www.ancfcc.gov.ma/)\r\n\r\n### Testbild:\r\n[Wohnungsbild](https://via.placeholder.com/800x400)!\r\n\r\n---\r\n\r\n## 5) Beispielcode\r\n\r\n„js\r\nFunktion berechnePreis(Fläche, PreisPerMeter) {\r\nRückgabebereich * pricePerMeter;\r\n}\r\n\r\nconsole.log(calculatePrice(80, 12000)); // Beispiel für die Berechnung des Wohnungspreises', '#Gids voor het kopen van een appartement in Marokko in 2025\r\n\r\nVoordat u een aankoopbeslissing neemt, is het belangrijk om een aantal basispunten te kennen, zodat u zeker weet dat u de juiste beslissing neemt.\r\n\r\n---\r\n\r\n## 1) Juridische documenten verifiëren\r\n\r\n- Er is een vastgoedvergoeding.\r\n- Het verifiëren van de identiteit van de eigenaar.\r\n- Overeenkomen met de werkelijke grootte van documenten.\r\n- Bezoek het appartement met een deskundige.\r\n\r\n**Opmerking:** Het wordt altijd aanbevolen om de hulp in te roepen van een notaris of een gespecialiseerde advocaat voordat u het contract ondertekent.\r\n\r\n---\r\n\r\n## 2) Vergelijking van appartementprijzen per stad (tabel)\r\n\r\n|Stad |Prijs per meter (AED) |Opmerkingen |\r\n|---------------|------------------|-----------------------|\r\n|Casablanca |12.000 |Hoog vanwege de grote vraag\r\n|Rabat |11.000 |Relatieve stabiliteit\r\n|Marrakech |10.000 |Geschikt voor toeristische investeringen\r\n|Nador |7.500 |Zeer redelijke prijzen\r\n\r\n---\r\n\r\n## 3) Tips bij een bezoek aan het appartement\r\n\r\n1. Zorg voor de kwaliteit van deuren en ramen.\r\n2. Waterdruktest.\r\n3. Zorg voor goede ventilatie.\r\n4. Houd toezicht op de natuurlijke verlichting in kamers.\r\n\r\n---\r\n\r\n##4) Voorbeeldlink en afbeelding\r\n\r\n### Belangrijke link:\r\n[Real Estate Governorate Portal](https://www.ancfcc.gov.ma/)\r\n\r\n### Testafbeelding:\r\n[Afbeelding appartement](https://via.placeholder.com/800x400)!\r\n\r\n---\r\n\r\n## 5) Voorbeeld van code\r\n\r\n```js\r\nfunctie berekenenPrijs(oppervlakte, prijsPerMeter) {\r\nretourgebied * prijsPerMeter;\r\n}\r\n\r\nconsole.log(calculatePrice(80, 12000));// Voorbeeld van het berekenen van de prijs van een appartement', '3.PNG', '2025-12-11 16:03:21', 'market', 'https://youtu.be/fOIORJxRzg0?si=mapsvV-_52TRvk1j');
INSERT INTO `news` (`id`, `title_ar`, `title_en`, `title_fr`, `title_es`, `title_de`, `title_nl`, `content_ar`, `content_en`, `content_fr`, `content_es`, `content_de`, `content_nl`, `image_url`, `published_at`, `category`, `youtube_url`) VALUES
(60, 'يستخدم هذا الموقع الإلكتروني مكتبة ``.', 'This website uses the ``.', 'Ce site Web utilise le ``.', 'Este sitio web utiliza el ``.', 'Diese Website verwendet die Datei „.', 'Deze website gebruikt de ``.', '# دليل استخدام لغة \r\n\r\n## العناوين\r\n\r\n# هذا عنوان 1\r\n## هذا عنوان 2\r\n###### هذا عنوان 6\r\n\r\n## التأكيد\r\n\r\n*سيكون هذا النص مائلاً*\r\n_سيكون هذا النص مائلاً أيضاً_\r\n\r\n**سيكون هذا النص غامقاً**\r\n__سيكون هذا النص غامقاً أيضاً__\r\n\r\n_يمكنك دمجها_\r\n\r\n## القوائم\r\n\r\n### غير مرتبة\r\n\r\n* العنصر 1\r\n* العنصر 2\r\n* العنصر 2أ\r\n* العنصر 2ب\r\n* العنصر 3أ\r\n* العنصر 3ب\r\n\r\n### مرتبة\r\n\r\n1. العنصر 1\r\n2. العنصر 2\r\n3. العنصر 3\r\n1. العنصر 3أ\r\n2. العنصر 3ب\r\n\r\n## الصور\r\n\r\n![هذا نص بديل.](//. \"هذه صورة نموذجية.\")\r\n\r\n## الروابط\r\n\r\nقد تكون باستخدام [معاينة  المباشرة](://./).\r\n\r\n## اقتباسات\r\n\r\n>  هي لغة ترميز خفيفة الوزن ذات بنية نصية بسيطة، تم إنشاؤها عام ٢٠٠٤ بواسطة جون غروبر وآرون شوارتز.\r\n\r\n>\r\n>> تُستخدم  غالبًا لتنسيق ملفات ، وكتابة الرسائل في منتديات النقاش عبر الإنترنت، وإنشاء نصوص منسقة باستخدام محرر نصوص عادي.\r\n\r\n## جداول\r\n\r\n| الأعمدة اليسرى | الأعمدة اليمنى |\r\n\r\n| ------------- |:-------------:|\r\n\r\n|  اليسرى |  اليمنى |\r\n\r\n|  اليسرى |  اليمنى |\r\n\r\n|  اليسرى |  اليمنى |\r\n\r\n## كتل التعليمات البرمجية\r\n\r\n```\r\n  = \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## الكود المضمن\r\n\r\nيستخدم هذا الموقع الإلكتروني مكتبة `/`.', '# Language usage guide\r\n\r\n## Titles\r\n\r\n# This is address 1\r\n## This is address 2\r\n###### This is address 6\r\n\r\n## Confirmation\r\n\r\n*This text will be in italics*\r\n_This text will also be in italics_\r\n\r\n**This text will be bold**\r\n__This text will also be bold__\r\n\r\n_You can combine them _\r\n\r\n## Lists\r\n\r\n### Unordered\r\n\r\n*Item 1\r\n*Item 2\r\n*Item 2a\r\n*Item 2b\r\n*Item 3a\r\n*Item 3b\r\n\r\n### Ranked\r\n\r\n1. Item 1\r\n2. Item 2\r\n3. Item 3\r\n1. Item 3a\r\n2. Item 3b\r\n\r\n## Photos\r\n\r\n![This is alternative text.](//. \"This is an example image.\")\r\n\r\n## Links\r\n\r\nYou may be using [Live Preview](://./).\r\n\r\n## Quotes\r\n\r\n> It is a lightweight coding language with a simple script structure, created in 2004 by John Gruber and Aaron Schwartz.\r\n\r\n>\r\n>> It is often used to format .files, write messages in online discussion forums, and create rich text using a regular text editor.\r\n\r\n## Tables\r\n\r\n|Left columns |Right columns |\r\n\r\n|------------- |:-------------:|\r\n\r\n|left |right |\r\n\r\n|left |right |\r\n\r\n|left |right |\r\n\r\n## Code blocks\r\n\r\n```\r\n= \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## Embedded code\r\n\r\nThis website uses the `/` library.', '# Guide d\'utilisation de la langue \r\n\r\n## Titres\r\n\r\n# Ceci est l\'adresse 1\r\n## Voici l\'adresse 2\r\n###### Voici l\'adresse 6\r\n\r\n##Confirmation\r\n\r\n*Ce texte sera en italique*\r\n_Ce texte sera également en italique_\r\n\r\n**Ce texte sera en gras**\r\n__Ce texte sera également en gras__\r\n\r\n_Vous pouvez les combiner _\r\n\r\n## Listes\r\n\r\n### Non commandé\r\n\r\n*Article 1\r\n*Article 2\r\n*Article 2a\r\n*Article 2b\r\n*Article 3a\r\n*Article 3b\r\n\r\n### Classé\r\n\r\n1. Point 1\r\n2. Point 2\r\n3. Point 3\r\n1. Point 3a\r\n2. Point 3b\r\n\r\n## Photos\r\n\r\n![Ceci est un texte alternatif.](//. \"Ceci est un exemple d\'image.\")\r\n\r\n## Liens\r\n\r\nVous utilisez peut-être [Live Preview](://./).\r\n\r\n## Citations\r\n\r\n> Il s\'agit d\'un langage de codage léger avec une structure de script simple, créé en 2004 par John Gruber et Aaron Schwartz.\r\n\r\n>\r\n>> Il est souvent utilisé pour formater des fichiers .files, rédiger des messages dans des forums de discussion en ligne et créer du texte enrichi à l\'aide d\'un éditeur de texte classique.\r\n\r\n## Tableaux\r\n\r\n|Colonnes de gauche |Colonnes de droite |\r\n\r\n|------------- |:-------------:|\r\n\r\n|gauche |à droite |\r\n\r\n|gauche |à droite |\r\n\r\n|gauche |à droite |\r\n\r\n## Blocs de code\r\n\r\n```\r\n= \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## Code intégré\r\n\r\nCe site Web utilise la bibliothèque `/`.', '# Guía de uso del idioma \r\n\r\n## Títulos\r\n\r\n# Esta es la dirección 1\r\n## Esta es la dirección 2\r\n###### Esta es la dirección 6\r\n\r\n## Confirmación\r\n\r\n*Este texto estará en cursiva*\r\n_Este texto también estará en cursiva_\r\n\r\n**Este texto estará en negrita**\r\n__Este texto también estará en negrita__\r\n\r\n_Puedes combinarlos _\r\n\r\n## Listas\r\n\r\n### desordenado\r\n\r\n*Artículo 1\r\n*Artículo 2\r\n*Ítem 2a\r\n*Ítem 2b\r\n*Ítem 3a\r\n*Ítem 3b\r\n\r\n### Clasificado\r\n\r\n1. Artículo 1\r\n2. Artículo 2\r\n3. Artículo 3\r\n1. Punto 3a\r\n2. Artículo 3b\r\n\r\n## Fotos\r\n\r\n![Este es un texto alternativo.](//. \"Esta es una imagen de ejemplo\").\r\n\r\n## Enlaces\r\n\r\nEs posible que esté utilizando [Vista previa en vivo](://./).\r\n\r\n## Cotizaciones\r\n\r\n> Es un lenguaje de codificación liviano con una estructura de escritura simple, creado en 2004 por John Gruber y Aaron Schwartz.\r\n\r\n>\r\n>> A menudo se utiliza para formatear archivos ., escribir mensajes en foros de discusión en línea y crear texto enriquecido utilizando un editor de texto normal.\r\n\r\n## Tablas\r\n\r\n|Columnas izquierdas |Columnas derechas |\r\n\r\n|------------- |:-------------:|\r\n\r\n|izquierda |derecha |\r\n\r\n|izquierda |derecha |\r\n\r\n|izquierda |derecha |\r\n\r\n## Bloques de código\r\n\r\n```\r\n= \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## Código incrustado\r\n\r\nEste sitio web utiliza la biblioteca `/`.', '# Leitfaden zum Sprachgebrauch \r\n\r\n## Titel\r\n\r\n# Dies ist Adresse 1\r\n## Das ist Adresse 2\r\n###### Das ist Adresse 6\r\n\r\n## Bestätigung\r\n\r\n*Dieser Text wird kursiv gedruckt*\r\n_Dieser Text wird auch kursiv geschrieben_\r\n\r\n**Dieser Text wird fett dargestellt**\r\n__Dieser Text wird auch fett dargestellt__\r\n\r\n_Sie können sie kombinieren _\r\n\r\n## Listen\r\n\r\n### Ungeordnet\r\n\r\n*Punkt 1\r\n*Punkt 2\r\n*Punkt 2a\r\n*Punkt 2b\r\n*Punkt 3a\r\n*Punkt 3b\r\n\r\n### Rang\r\n\r\n1. Punkt 1\r\n2. Punkt 2\r\n3. Punkt 3\r\n1. Punkt 3a\r\n2. Punkt 3b\r\n\r\n## Fotos\r\n\r\n![Dies ist Alternativtext.](//. „Dies ist ein Beispielbild.“)\r\n\r\n## Links\r\n\r\nMöglicherweise verwenden Sie [Live-Vorschau](://./).\r\n\r\n## Zitate\r\n\r\n> Es handelt sich um eine leichte Programmiersprache mit einer einfachen Skriptstruktur, die 2004 von John Gruber und Aaron Schwartz entwickelt wurde.\r\n\r\n>\r\n>> Es wird häufig zum Formatieren von .files, zum Schreiben von Nachrichten in Online-Diskussionsforen und zum Erstellen von Rich Text mit einem normalen Texteditor verwendet.\r\n\r\n## Tische\r\n\r\n|Linke Spalten |Rechte Spalten |\r\n\r\n|------------- |:-------------:|\r\n\r\n|links |richtig |\r\n\r\n|links |richtig |\r\n\r\n|links |richtig |\r\n\r\n## Codeblöcke\r\n\r\n„\r\n= \' \';\r\n\r\n();\r\n\r\n„\r\n\r\n## Eingebetteter Code\r\n\r\nDiese Website verwendet die Bibliothek „/“.', '# Gids voor taalgebruik \r\n\r\n## Titels\r\n\r\n# Dit is adres 1\r\n## Dit is adres 2\r\n###### Dit is adres 6\r\n\r\n## Bevestiging\r\n\r\n*Deze tekst wordt cursief weergegeven*\r\n_Deze tekst wordt ook cursief weergegeven_\r\n\r\n**Deze tekst wordt vetgedrukt**\r\n__Deze tekst wordt ook vetgedrukt__\r\n\r\n_Je kunt ze combineren _\r\n\r\n## Lijsten\r\n\r\n### Ongeordend\r\n\r\n*Artikel 1\r\n*Artikel 2\r\n*Artikel 2a\r\n*Artikel 2b\r\n*Artikel 3a\r\n*Artikel 3b\r\n\r\n### Gerangschikt\r\n\r\n1. Artikel 1\r\n2. Artikel 2\r\n3. Punt 3\r\n1. Punt 3a\r\n2. Punt 3b\r\n\r\n## Foto\'s\r\n\r\n![Dit is alternatieve tekst.](//. \"Dit is een voorbeeldafbeelding.\")\r\n\r\n## Koppelingen\r\n\r\nMogelijk gebruikt u [Live voorbeeld] (://./).\r\n\r\n## Citaten\r\n\r\n> Het is een lichtgewicht codeertaal met een eenvoudige scriptstructuur, gemaakt in 2004 door John Gruber en Aaron Schwartz.\r\n\r\n>\r\n>> Het wordt vaak gebruikt om .files op te maken, berichten te schrijven in online discussieforums en rich text te maken met behulp van een gewone teksteditor.\r\n\r\n## Tafels\r\n\r\n|Linkerkolommen |Rechterkolommen |\r\n\r\n|------------- |:-------------:|\r\n\r\n|links |juist |\r\n\r\n|links |juist |\r\n\r\n|links |juist |\r\n\r\n## Codeblokken\r\n\r\n```\r\n= \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## Ingesloten code\r\n\r\nDeze website maakt gebruik van de `/` bibliotheek.', 'ilon.jpg', '2025-12-16 15:57:22', 'market', 'https://youtu.be/Cq68dxSMNP8?si=YFpHZnm5bQFoA5aO'),
(61, 'يستخدم هذا الموقع الإلكتروني مكتبة ``.', 'This website uses the ``.', 'Ce site Web utilise le ``.', 'Este sitio web utiliza el ``.', 'Diese Website verwendet die Datei „.', 'Deze website gebruikt de ``.', '# دليل استخدام لغة \r\n\r\n## العناوين\r\n\r\n# هذا عنوان 1\r\n## هذا عنوان 2\r\n###### هذا عنوان 6\r\n\r\n## التأكيد\r\n\r\n*سيكون هذا النص مائلاً*\r\n_سيكون هذا النص مائلاً أيضاً_\r\n\r\n**سيكون هذا النص غامقاً**\r\n__سيكون هذا النص غامقاً أيضاً__\r\n\r\n_يمكنك دمجها_\r\n\r\n## القوائم\r\n\r\n### غير مرتبة\r\n\r\n* العنصر 1\r\n* العنصر 2\r\n* العنصر 2أ\r\n* العنصر 2ب\r\n* العنصر 3أ\r\n* العنصر 3ب\r\n\r\n### مرتبة\r\n\r\n1. العنصر 1\r\n2. العنصر 2\r\n3. العنصر 3\r\n1. العنصر 3أ\r\n2. العنصر 3ب\r\n\r\n## الصور\r\n\r\n![هذا نص بديل.](//. \"هذه صورة نموذجية.\")\r\n\r\n## الروابط\r\n\r\nقد تكون باستخدام [معاينة  المباشرة](://./).\r\n\r\n## اقتباسات\r\n\r\n>  هي لغة ترميز خفيفة الوزن ذات بنية نصية بسيطة، تم إنشاؤها عام ٢٠٠٤ بواسطة جون غروبر وآرون شوارتز.\r\n\r\n>\r\n>> تُستخدم  غالبًا لتنسيق ملفات ، وكتابة الرسائل في منتديات النقاش عبر الإنترنت، وإنشاء نصوص منسقة باستخدام محرر نصوص عادي.\r\n\r\n## جداول\r\n\r\n| الأعمدة اليسرى | الأعمدة اليمنى |\r\n\r\n| ------------- |:-------------:|\r\n\r\n|  اليسرى |  اليمنى |\r\n\r\n|  اليسرى |  اليمنى |\r\n\r\n|  اليسرى |  اليمنى |\r\n\r\n## كتل التعليمات البرمجية\r\n\r\n```\r\n  = \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## الكود المضمن\r\n\r\nيستخدم هذا الموقع الإلكتروني مكتبة `/`.', '# Language usage guide\r\n\r\n## Titles\r\n\r\n# This is address 1\r\n## This is address 2\r\n###### This is address 6\r\n\r\n## Confirmation\r\n\r\n*This text will be in italics*\r\n_This text will also be in italics_\r\n\r\n**This text will be bold**\r\n__This text will also be bold__\r\n\r\n_You can combine them _\r\n\r\n## Lists\r\n\r\n### Unordered\r\n\r\n*Item 1\r\n*Item 2\r\n*Item 2a\r\n*Item 2b\r\n*Item 3a\r\n*Item 3b\r\n\r\n### Ranked\r\n\r\n1. Item 1\r\n2. Item 2\r\n3. Item 3\r\n1. Item 3a\r\n2. Item 3b\r\n\r\n## Photos\r\n\r\n![This is alternative text.](//. \"This is an example image.\")\r\n\r\n## Links\r\n\r\nYou may be using [Live Preview](://./).\r\n\r\n## Quotes\r\n\r\n> It is a lightweight coding language with a simple script structure, created in 2004 by John Gruber and Aaron Schwartz.\r\n\r\n>\r\n>> It is often used to format .files, write messages in online discussion forums, and create rich text using a regular text editor.\r\n\r\n## Tables\r\n\r\n|Left columns |Right columns |\r\n\r\n|------------- |:-------------:|\r\n\r\n|left |right |\r\n\r\n|left |right |\r\n\r\n|left |right |\r\n\r\n## Code blocks\r\n\r\n```\r\n= \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## Embedded code\r\n\r\nThis website uses the `/` library.', '# Guide d\'utilisation de la langue \r\n\r\n## Titres\r\n\r\n# Ceci est l\'adresse 1\r\n## Voici l\'adresse 2\r\n###### Voici l\'adresse 6\r\n\r\n##Confirmation\r\n\r\n*Ce texte sera en italique*\r\n_Ce texte sera également en italique_\r\n\r\n**Ce texte sera en gras**\r\n__Ce texte sera également en gras__\r\n\r\n_Vous pouvez les combiner _\r\n\r\n## Listes\r\n\r\n### Non commandé\r\n\r\n*Article 1\r\n*Article 2\r\n*Article 2a\r\n*Article 2b\r\n*Article 3a\r\n*Article 3b\r\n\r\n### Classé\r\n\r\n1. Point 1\r\n2. Point 2\r\n3. Point 3\r\n1. Point 3a\r\n2. Point 3b\r\n\r\n## Photos\r\n\r\n![Ceci est un texte alternatif.](//. \"Ceci est un exemple d\'image.\")\r\n\r\n## Liens\r\n\r\nVous utilisez peut-être [Live Preview](://./).\r\n\r\n## Citations\r\n\r\n> Il s\'agit d\'un langage de codage léger avec une structure de script simple, créé en 2004 par John Gruber et Aaron Schwartz.\r\n\r\n>\r\n>> Il est souvent utilisé pour formater des fichiers .files, rédiger des messages dans des forums de discussion en ligne et créer du texte enrichi à l\'aide d\'un éditeur de texte classique.\r\n\r\n## Tableaux\r\n\r\n|Colonnes de gauche |Colonnes de droite |\r\n\r\n|------------- |:-------------:|\r\n\r\n|gauche |à droite |\r\n\r\n|gauche |à droite |\r\n\r\n|gauche |à droite |\r\n\r\n## Blocs de code\r\n\r\n```\r\n= \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## Code intégré\r\n\r\nCe site Web utilise la bibliothèque `/`.', '# Guía de uso del idioma \r\n\r\n## Títulos\r\n\r\n# Esta es la dirección 1\r\n## Esta es la dirección 2\r\n###### Esta es la dirección 6\r\n\r\n## Confirmación\r\n\r\n*Este texto estará en cursiva*\r\n_Este texto también estará en cursiva_\r\n\r\n**Este texto estará en negrita**\r\n__Este texto también estará en negrita__\r\n\r\n_Puedes combinarlos _\r\n\r\n## Listas\r\n\r\n### desordenado\r\n\r\n*Artículo 1\r\n*Artículo 2\r\n*Ítem 2a\r\n*Ítem 2b\r\n*Ítem 3a\r\n*Ítem 3b\r\n\r\n### Clasificado\r\n\r\n1. Artículo 1\r\n2. Artículo 2\r\n3. Artículo 3\r\n1. Punto 3a\r\n2. Artículo 3b\r\n\r\n## Fotos\r\n\r\n![Este es un texto alternativo.](//. \"Esta es una imagen de ejemplo\").\r\n\r\n## Enlaces\r\n\r\nEs posible que esté utilizando [Vista previa en vivo](://./).\r\n\r\n## Cotizaciones\r\n\r\n> Es un lenguaje de codificación liviano con una estructura de escritura simple, creado en 2004 por John Gruber y Aaron Schwartz.\r\n\r\n>\r\n>> A menudo se utiliza para formatear archivos ., escribir mensajes en foros de discusión en línea y crear texto enriquecido utilizando un editor de texto normal.\r\n\r\n## Tablas\r\n\r\n|Columnas izquierdas |Columnas derechas |\r\n\r\n|------------- |:-------------:|\r\n\r\n|izquierda |derecha |\r\n\r\n|izquierda |derecha |\r\n\r\n|izquierda |derecha |\r\n\r\n## Bloques de código\r\n\r\n```\r\n= \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## Código incrustado\r\n\r\nEste sitio web utiliza la biblioteca `/`.', '# Leitfaden zum Sprachgebrauch \r\n\r\n## Titel\r\n\r\n# Dies ist Adresse 1\r\n## Das ist Adresse 2\r\n###### Das ist Adresse 6\r\n\r\n## Bestätigung\r\n\r\n*Dieser Text wird kursiv gedruckt*\r\n_Dieser Text wird auch kursiv geschrieben_\r\n\r\n**Dieser Text wird fett dargestellt**\r\n__Dieser Text wird auch fett dargestellt__\r\n\r\n_Sie können sie kombinieren _\r\n\r\n## Listen\r\n\r\n### Ungeordnet\r\n\r\n*Punkt 1\r\n*Punkt 2\r\n*Punkt 2a\r\n*Punkt 2b\r\n*Punkt 3a\r\n*Punkt 3b\r\n\r\n### Rang\r\n\r\n1. Punkt 1\r\n2. Punkt 2\r\n3. Punkt 3\r\n1. Punkt 3a\r\n2. Punkt 3b\r\n\r\n## Fotos\r\n\r\n![Dies ist Alternativtext.](//. „Dies ist ein Beispielbild.“)\r\n\r\n## Links\r\n\r\nMöglicherweise verwenden Sie [Live-Vorschau](://./).\r\n\r\n## Zitate\r\n\r\n> Es handelt sich um eine leichte Programmiersprache mit einer einfachen Skriptstruktur, die 2004 von John Gruber und Aaron Schwartz entwickelt wurde.\r\n\r\n>\r\n>> Es wird häufig zum Formatieren von Dateien, zum Schreiben von Nachrichten in Online-Diskussionsforen und zum Erstellen von Rich Text mit einem normalen Texteditor verwendet.\r\n\r\n## Tische\r\n\r\n|Linke Spalten |Rechte Spalten |\r\n\r\n|------------- |:-------------:|\r\n\r\n|links |richtig |\r\n\r\n|links |richtig |\r\n\r\n|links |richtig |\r\n\r\n## Codeblöcke\r\n\r\n„\r\n= \' \';\r\n\r\n();\r\n\r\n„\r\n\r\n## Eingebetteter Code\r\n\r\nDiese Website verwendet die Bibliothek „/“.', '# Gids voor taalgebruik \r\n\r\n## Titels\r\n\r\n# Dit is adres 1\r\n## Dit is adres 2\r\n###### Dit is adres 6\r\n\r\n## Bevestiging\r\n\r\n*Deze tekst wordt cursief weergegeven*\r\n_Deze tekst wordt ook cursief weergegeven_\r\n\r\n**Deze tekst wordt vetgedrukt**\r\n__Deze tekst wordt ook vetgedrukt__\r\n\r\n_Je kunt ze combineren _\r\n\r\n## Lijsten\r\n\r\n### Ongeordend\r\n\r\n*Artikel 1\r\n*Artikel 2\r\n*Artikel 2a\r\n*Artikel 2b\r\n*Artikel 3a\r\n*Artikel 3b\r\n\r\n### Gerangschikt\r\n\r\n1. Artikel 1\r\n2. Artikel 2\r\n3. Punt 3\r\n1. Punt 3a\r\n2. Punt 3b\r\n\r\n## Foto\'s\r\n\r\n![Dit is alternatieve tekst.](//. \"Dit is een voorbeeldafbeelding.\")\r\n\r\n## Koppelingen\r\n\r\nMogelijk gebruikt u [Live voorbeeld] (://./).\r\n\r\n## Citaten\r\n\r\n> Het is een lichtgewicht codeertaal met een eenvoudige scriptstructuur, gemaakt in 2004 door John Gruber en Aaron Schwartz.\r\n\r\n>\r\n>> Het wordt vaak gebruikt om .files op te maken, berichten te schrijven in online discussieforums en rich text te maken met behulp van een gewone teksteditor.\r\n\r\n## Tafels\r\n\r\n|Linkerkolommen |Rechterkolommen |\r\n\r\n|------------- |:-------------:|\r\n\r\n|links |juist |\r\n\r\n|links |juist |\r\n\r\n|links |juist |\r\n\r\n## Codeblokken\r\n\r\n```\r\n= \' \';\r\n\r\n();\r\n\r\n```\r\n\r\n## Ingesloten code\r\n\r\nDeze website maakt gebruik van de `/` bibliotheek.', 'Capture dâÃ©cran (27).png', '2025-12-16 16:18:15', 'legal', 'https://youtu.be/Cq68dxSMNP8?si=YFpHZnm5bQFoA5aO'),
(62, 'رر', 'pl', 'svp', 'sustantivo, masculino, plural—', 'pl', 'pl', 'يرررب', 'Yrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'Yrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'Yrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'Yrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'Jarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'Capture dâÃ©cran (30).png', '2025-12-16 16:19:26', 'market', 'ر'),
(63, 'لتأكيد *سيكون هذا', 'To confirm *this will be', 'Pour confirmer *ce sera', 'Para confirmar *esto será', 'Zur Bestätigung *das wird sein', 'Ter bevestiging *dit zal zijn', '# دليل استخدام لغة ## العناوين # هذا عنوان 1 ## هذا عنوان 2 ###### هذا عنوان 6 ## التأكيد *سيكون هذا النص مائلاً* _سيكون هذا النص مائلاً أيضاً_ **سيكون هذا النص غامقاً** __سيكون هذا النص غامقاً أيضاً__ _يمكنك دمجها_ ## القوائم ### غير مرتبة * العنصر 1 * العنصر 2 * العنصر 2أ * العنصر 2ب * العنصر 3أ * العنصر 3ب ### مرتبة 1. العنصر 1 2. العنصر 2 3. العنصر 3 1. العنصر 3أ 2. العنصر 3ب ## الصور ![هذا نص بديل.](//. \"هذه صورة نموذجية.\") ## الروابط قد تكون باستخدام [معاينة المباشرة](://./). ## اقتباسات > هي لغة ترميز خفيفة الوزن ذات بنية نصية بسيطة، تم إنشاؤها عام ٢٠٠٤ بواسطة جون غروبر وآرون شوارتز. > >> تُستخدم غالبًا لتنسيق ملفات ، وكتابة الرسائل في منتديات النقاش عبر الإنترنت، وإنشاء نصوص منسقة باستخدام محرر نصوص عادي. ## جداول | الأعمدة اليسرى | الأعمدة اليمنى | | ------------- |:-------------:| | اليسرى | اليمنى | | اليسرى | اليمنى | | اليسرى | اليمنى | ## كتل التعليمات البرمجية ``` = \' \'; (); ``` ## الكود المضمن يستخدم هذا الموقع الإلكتروني مكتبة `/`.', '# Language User Guide ## Headings # This is Heading 1 ## This is Heading 2 ###### This is Heading 6 ## Emphasis *This text will be italic* _This text will also be italic_ **This text will be bold** __This text will also be bold__ _You can combine them_ ## Lists ### Unordered * Item 1 * Item 2 * Item 2a * Item 2b * Item 3a * Item 3b ### Ordered 1. Item 12. Item 2 3. Item 3 1. Item 3a 2. Item 3b ## Images![This is alt text.](//. “This is an example image.”) ## Links may be using [Live Preview](://./).## Quotes > It is a lightweight markup language with a simple script syntax, created in 2004 by John Gruber and Aaron Schwartz.>> They are often used to format .files, write messages in online discussion forums, and create rich text using a regular text editor.## Tables |Left columns |Right columns ||------------- |:-------------:||left |right ||left |right ||left |right |## Code blocks ``` = \' \';();``` ## Embedded code This website uses the `/` library.', '# Guide de l\'utilisateur de la langue ## Titres # Ceci est le titre 1 ## Ceci est le titre 2 ###### Ceci est le titre 6 ## Accentuation *Ce texte sera en italique* _Ce texte sera également en italique_ **Ce texte sera en gras** __Ce texte sera également en gras__ _Vous pouvez les combiner_ ## Listes ### Non ordonnées * Article 1 * Article 2 * Article 2a * Article 2b * Article 3a * Article 3b ### Commandé 1. Article 1 2. Article 2 3. Article 3 1. Article 3a 2. Article 3b ## Images ![Ceci est un texte alternatif.](//. \"Ceci est un exemple d\'image.\") ## Les liens peuvent utiliser [Aperçu en direct](://./).## Quotes > Il s\'agit d\'un langage de balisage léger avec une syntaxe de script simple, créé en 2004 par John Gruber et Aaron Schwartz.>> Ils sont souvent utilisés pour formater des fichiers .files, rédiger des messages dans des forums de discussion en ligne et créer du texte enrichi à l\'aide d\'un éditeur de texte classique.## Tableaux |Colonnes de gauche |Colonnes de droite ||------------- |:-------------:||gauche |à droite ||gauche |à droite ||gauche |à droite |## Blocs de code ``` = \' \';();``` ## Code embarqué Ce site utilise la bibliothèque `/`.', '# Guía del usuario de idiomas ## Encabezados # Este es el Título 1 ## Este es el Título 2 ###### Este es el Título 6 ## Énfasis *Este texto estará en cursiva* _Este texto también estará en cursiva_ **Este texto estará en negrita** __Este texto también estará en negrita__ _Puedes combinarlos_ ## Listas ### Sin ordenar * Artículo 1 * Artículo 2 * Artículo 2a * Artículo 2b * Artículo 3a * Artículo 3b ### Ordenado 1. Artículo 1 2. Artículo 2 3. Artículo 3 1. Artículo 3a 2. Artículo 3b ## ¡Imágenes![Este es texto alternativo.](//. “Esta es una imagen de ejemplo.”) ## Los enlaces pueden estar usando [Vista previa en vivo](://./).## Citas > Es un lenguaje de marcado liviano con una sintaxis de script simple, creado en 2004 por John Gruber y Aaron Schwartz.>> A menudo se utilizan para formatear archivos ., escribir mensajes en foros de discusión en línea y crear texto enriquecido utilizando un editor de texto normal.## Mesas |Columnas izquierdas |Columnas derechas ||------------- |:-------------:||izquierda |derecha ||izquierda |derecha ||izquierda |derecha |## Bloques de código ``` = \' \';();``` ## Código incrustado Este sitio web utiliza la biblioteca `/`.', '# Sprachbenutzerhandbuch ## Überschriften # Dies ist Überschrift 1 ## Dies ist Überschrift 2 ###### Dies ist Überschrift 6 ## Hervorhebung *Dieser Text wird kursiv sein* _Dieser Text wird auch kursiv sein_ **Dieser Text wird fett sein** __Dieser Text wird auch fett sein__ _Sie können sie kombinieren_ ## Listen ### Ungeordnet * Punkt 1 * Punkt 2 * Punkt 2a * Punkt 2b * Punkt 3a * Artikel 3b ### Bestellt 1. Artikel 1 2. Artikel 2 3. Artikel 3 1. Artikel 3a 2. Artikel 3b ## Bilder![Dies ist Alternativtext.](//. „Dies ist ein Beispielbild.“) ## Links verwenden möglicherweise [Live-Vorschau](://./).## Zitate > Es handelt sich um eine leichte Auszeichnungssprache mit einer einfachen Skriptsyntax, die 2004 von John Gruber und Aaron Schwartz erstellt wurde.>> Sie werden häufig zum Formatieren von Dateien, zum Schreiben von Nachrichten in Online-Diskussionsforen und zum Erstellen von Rich Text mit einem normalen Texteditor verwendet.## Tabellen |Linke Spalten |Rechte Spalten ||------------- |:-------------:||links |richtig ||links |richtig ||links |richtig |## Codeblöcke ``` = \' \';();``` ## Eingebetteter Code Diese Website verwendet die Bibliothek „/“.', '# Taalgebruikershandleiding ## Koppen # Dit is kop 1 ## Dit is kop 2 ###### Dit is kop 6 ## Nadruk *Deze tekst zal cursief zijn* _Deze tekst zal ook cursief zijn_ **Deze tekst zal vetgedrukt zijn** __Deze tekst zal ook vetgedrukt zijn__ _Je kunt ze combineren_ ## Lijsten ### Ongeordend * Item 1 * Item 2 * Item 2a * Item 2b * Item 3a * Item 3b ### Besteld 1. Item 1 2. Item 2 3. Item 3 1. Item 3a 2. Item 3b ## Afbeeldingen![Dit is alternatieve tekst.](//. “Dit is een voorbeeldafbeelding.”) ## Links maken mogelijk gebruik van [Live Preview](://./).## Quotes > Het is een lichtgewicht opmaaktaal met een eenvoudige scriptsyntaxis, gemaakt in 2004 door John Gruber en Aaron Schwartz.>> Ze worden vaak gebruikt om .files op te maken, berichten te schrijven in online discussieforums en rich text te maken met behulp van een gewone teksteditor.## Tafels |Linkerkolommen |Rechterkolommen ||------------- |:-------------:||links |juist ||links |juist ||links |juist |## Codeblokken ``` = \' \';();``` ## Ingebedde code Deze website maakt gebruik van de `/` bibliotheek.', '1765967763456-684914148.png', '2025-12-17 10:36:17', 'legal', 'https://youtu.be/Cq68dxSMNP8?si=YFpHZnm5bQFoA5aO'),
(64, 'وضح', 'Explain', 'Expliquer', 'Explicar', 'Erklären', 'Uitleggen', 'وضح', 'Explain', 'Expliquer', 'Explicar', 'Erklären', 'Uitleggen', '1766068978855-296885876.webp', '2025-12-18 14:43:03', 'market', 'https://youtu.be/yEAmNisPOzk?si=76mHg7DJrQA4-z0V'),
(65, 'جميل', 'Beautiful', 'Beau', 'Hermoso', 'Schön', 'Mooi', 'جميل', 'Beautiful', 'Beau', 'Hermoso', 'Schön', 'Mooi', '1766672369417-106204631.webp', '2025-12-25 14:19:33', 'market', 'https://youtu.be/hbROgBDUbW0?si=j7WQzjm1IHCzTwgL');

-- --------------------------------------------------------

--
-- Structure de la table `properties`
--

CREATE TABLE `properties` (
  `property_id` int(11) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `title_es` varchar(255) DEFAULT NULL,
  `title_fr` varchar(255) DEFAULT NULL,
  `title_de` varchar(255) DEFAULT NULL,
  `title_nl` varchar(255) DEFAULT NULL,
  `description_ar` text NOT NULL,
  `description_en` text DEFAULT NULL,
  `description_es` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `description_de` text DEFAULT NULL,
  `description_nl` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `old_price` decimal(10,2) DEFAULT NULL,
  `exact_address` varchar(255) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `salon` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `area` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `city_id` int(11) DEFAULT NULL,
  `available` tinyint(1) DEFAULT 1,
  `availability_date` date DEFAULT NULL,
  `floors` int(11) DEFAULT NULL,
  `kitchen` int(11) DEFAULT NULL,
  `is_sold` tinyint(1) NOT NULL DEFAULT 0,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `featured_at` timestamp NULL DEFAULT NULL,
  `sold_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `properties`
--

INSERT INTO `properties` (`property_id`, `title_ar`, `title_en`, `title_es`, `title_fr`, `title_de`, `title_nl`, `description_ar`, `description_en`, `description_es`, `description_fr`, `description_de`, `description_nl`, `price`, `old_price`, `exact_address`, `bedrooms`, `salon`, `bathrooms`, `area`, `type`, `city_id`, `available`, `availability_date`, `floors`, `kitchen`, `is_sold`, `is_featured`, `featured_at`, `sold_date`) VALUES
(270, 'بب', 'B', 'B', 'B', 'B', 'B', 'بب', 'B', 'B', 'B', 'B', 'B', 1.00, NULL, 'null', 1, 1, 1, 11, 'requests', NULL, 0, '0000-00-00', 1, 1, 0, 0, NULL, NULL),
(271, 'عع', 'A', 'A', 'UN', 'A', 'A', 'عع', 'A', 'A', 'UN', 'A', 'A', 1.00, NULL, '0', 1, 1, 1, 11, 'apartmentsReq', NULL, 0, '0000-00-00', 1, 1, 0, 1, '2025-12-22 12:40:37', NULL),
(273, 'فف', 'FF', 'FF', 'FR', 'FF', 'FF', 'فف', 'FF', 'FF', 'FR', 'FF', 'FF', 1.00, NULL, 'null', 1, 1, 1, 11, 'regularRent', NULL, 0, '0000-00-00', 1, 1, 0, 1, '2025-12-23 10:55:03', '0000-00-00'),
(274, 'فف', 'FF', 'FF', 'FR', 'FF', 'FF', 'فف', 'FF', 'FF', 'FR', 'FF', 'FF', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'rent', 2, 1, '0000-00-00', 1, 1, 0, 0, NULL, '0000-00-00'),
(275, 'فف', 'Fabrication', 'Fabricación', 'Fabrication', 'Herstellung', 'Fabricage', 'فف', 'Fabrication', 'Fabricación', 'Fabrication', 'Herstellung', 'Fabricage', 1.00, NULL, '0', 1, 1, 1, 11, 'apartmentsReq', NULL, 0, NULL, 1, 1, 0, 0, NULL, NULL),
(276, 'فف', 'Fabrication', 'Fabricación', 'Fabrication', 'Herstellung', 'Fabricage', 'فف', 'Fabrication', 'Fabricación', 'Fabrication', 'Herstellung', 'Fabricage', 1.00, NULL, '0', 1, 1, 1, 11, 'requests', NULL, 0, NULL, 1, 1, 0, 0, NULL, NULL),
(279, 'اتفاق تدريب', 'Training agreement', 'Acuerdo de capacitación', 'Contrat de formation', 'Schulungsvereinbarung', 'Trainingsovereenkomst', 'اتفاق تدريب', 'Training agreement', 'Acuerdo de capacitación', 'Contrat de formation', 'Schulungsvereinbarung', 'Trainingsovereenkomst', 1.00, NULL, '0', 1, 1, 1, 1, 'CommercialgaragesReq', NULL, 0, NULL, NULL, 1, 0, 0, NULL, NULL),
(280, 'اتفاق ', 'deal', 'trato', 'accord', 'handeln', 'overeenkomst', 'تدريب', 'training', 'capacitación', 'entraînement', 'Ausbildung', 'opleiding', 1.00, NULL, 'null', 0, 0, 0, 152, 'floorplots', NULL, 0, '0000-00-00', 0, 0, 1, 0, NULL, '2025-12-23'),
(281, 'اتفاق ', 'deal', 'trato', 'accord', 'handeln', 'overeenkomst', 'اتفاق ', 'deal', 'trato', 'accord', 'handeln', 'overeenkomst', 1.00, NULL, NULL, NULL, NULL, NULL, 152, 'floorplotsReq', NULL, 0, NULL, NULL, NULL, 0, 0, NULL, NULL),
(282, 'منز كبير', 'Large house', 'Casa grande', 'Grande maison', 'Großes Haus', 'Groot huis', 'منز كبير', 'Large house', 'Casa grande', 'Grande maison', 'Großes Haus', 'Groot huis', 12.00, NULL, '0', NULL, NULL, NULL, 150, 'requests', NULL, 0, NULL, NULL, NULL, 0, 0, NULL, NULL),
(283, 'شقة كبير', 'A big apartment', 'Un gran apartamento', 'Un grand appartement', 'Eine große Wohnung', 'Een groot appartement', 'شقة كبير', 'A big apartment', 'Un gran apartamento', 'Un grand appartement', 'Eine große Wohnung', 'Een groot appartement', 12.00, NULL, '0', NULL, NULL, NULL, 150, 'apartmentsReq', NULL, 0, NULL, NULL, NULL, 0, 0, NULL, NULL),
(284, 'ارض كبير', 'Great land', 'Gran tierra', 'Grande terre', 'Tolles Land', 'Geweldig land', 'ارض كبير', 'Great land', 'Gran tierra', 'Grande terre', 'Tolles Land', 'Geweldig land', 12.00, NULL, '0', NULL, NULL, NULL, 150, 'floorplotsReq', NULL, 0, '0000-00-00', NULL, NULL, 1, 0, NULL, '2025-12-14'),
(285, 'كاراج كبير', 'Big Karage', 'Big Karage', 'Gros karage', 'Big Karage', 'Grote karage', 'كاراج كبير', 'Big Karage', 'Big Karage', 'Gros karage', 'Big Karage', 'Grote karage', 12.00, NULL, '0', NULL, NULL, NULL, 150, 'CommercialgaragesReq', NULL, 0, NULL, NULL, NULL, 0, 0, NULL, NULL),
(286, 'قطعة ارض ', 'piece of land', 'terreno', 'parcelle de terre', 'Stück Land', 'stuk land', 'قطعة ارض ', 'piece of land', 'terreno', 'parcelle de terre', 'Stück Land', 'stuk land', 12.00, NULL, '0', 0, 0, 0, 150, 'floorplotsReq', NULL, 0, '0000-00-00', 0, 0, 0, 0, NULL, NULL),
(287, 'ارض صالحة للزراعة', 'Land suitable for cultivation', 'Tierra adecuada para el cultivo', 'Terre adaptée à la culture', 'Land für den Anbau geeignet', 'Land geschikt voor teelt', 'ارض صالحة للزراعة', 'Land suitable for cultivation', 'Tierra adecuada para el cultivo', 'Terre adaptée à la culture', 'Land für den Anbau geeignet', 'Land geschikt voor teelt', 12.00, NULL, '0', NULL, NULL, NULL, 1500, 'floorplotsReq', NULL, 0, NULL, NULL, NULL, 0, 0, NULL, NULL),
(288, 'كتابة طلب عمل', 'Writing a job application', 'Escribir una solicitud de empleo', 'Rédaction d\'une demande d\'emploi', 'Eine Bewerbung schreiben', 'Een sollicitatie schrijven', 'كتابة طلب عمل', 'Writing a job application', 'Escribir una solicitud de empleo', 'Rédaction d\'une demande d\'emploi', 'Eine Bewerbung schreiben', 'Een sollicitatie schrijven', 1.00, NULL, '0', 0, 0, 0, 150, 'requests', NULL, 0, '0000-00-00', 0, 0, 0, 0, NULL, '0000-00-00'),
(289, 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', '4102', '4102', '4102', '4102', '4102', '4102', 2.00, NULL, 'null', 2, 2, 2, 22, 'regularRent', NULL, 0, '0000-00-00', 2, 2, 0, 0, NULL, '0000-00-00'),
(290, 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 2.00, NULL, '', 2, 2, 2, 22, 'buy', NULL, 1, NULL, 2, 2, 0, 0, NULL, NULL),
(291, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 2.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', NULL, 1, '0000-00-00', 1, 1, 0, 0, NULL, '0000-00-00'),
(292, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل', 'place', 'lugar', 'lieu', 'Ort', 'plaats', 2.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', NULL, 1, '0000-00-00', 1, 1, 0, 0, NULL, '0000-00-00'),
(293, 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 'للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء للكراء ', 'For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent For rent', 'En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler En alquiler', 'À louer À louer À louer À louer À louer À louer À louer À louer À louer À louer À louer À louer À louer À louer À louer', 'Zu vermieten. Zu vermieten. Zu vermieten. Zu vermieten. Zu vermieten. Zu vermieten. Zu vermieten. Zu vermieten. Zu vermieten', 'Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur Te huur', 2.00, NULL, '', 2, 2, 2, 22, 'buy', NULL, 1, '0000-00-00', 2, 2, 0, 0, NULL, '0000-00-00'),
(294, 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 2.00, NULL, '', 2, 2, 2, 22, 'regularRent', NULL, 1, '0000-00-00', 2, 2, 0, 0, NULL, '0000-00-00'),
(295, 'نعم', 'Yes', 'Sí', 'Oui', 'Ja', 'Ja', 'نعم', 'Yes', 'Sí', 'Oui', 'Ja', 'Ja', 2.00, NULL, '', 2, 2, 2, 22, 'buy', 1, 1, '0000-00-00', 1, 2, 1, 0, NULL, '2025-12-16'),
(296, 'كراء', 'Rent', 'Alquilar', 'Louer', 'Mieten', 'Huur', 'كراء', 'Rent', 'Alquilar', 'Louer', 'Mieten', 'Huur', 2.00, NULL, '7379+44W, Beni Ansar', 2, 2, 2, 22, 'rent', 2, 0, '2026-01-10', NULL, 2, 0, 0, NULL, '0000-00-00'),
(297, 'نعم', 'Yes', 'Sí', 'Oui', 'Ja', 'Ja', 'نعم', 'Yes', 'Sí', 'Oui', 'Ja', 'Ja', 2.00, NULL, '', 2, 2, 2, 22, 'buy', 1, 1, '0000-00-00', 5, 2, 1, 0, NULL, '2025-12-20'),
(298, 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 1.00, 2.00, '', 2, 2, 2, 22, 'buy', NULL, 1, '0000-00-00', 5, 2, 0, 0, NULL, '0000-00-00'),
(299, 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', 1, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(300, 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 'محل ', 'place', 'lugar', 'lieu', 'Ort', 'plaats', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', 2, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(301, 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 'محل تجاري للكراء', 'Commercial store for rent', 'Se alquila local comercial', 'Magasin commercial à louer', 'Gewerbeladen zu vermieten', 'Commerciële winkel te huur', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', 1, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(302, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل ', 'place', 'lugar', 'lieu', 'Ort', 'plaats', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', 1, 1, NULL, 1, 1, 0, 1, '2025-12-22 13:51:16', NULL),
(303, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'حل', 'solution', 'solución', 'solution', 'Lösung', 'oplossing', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', 1, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(304, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', NULL, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(305, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل ', 'place', 'lugar', 'lieu', 'Ort', 'plaats', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', NULL, 1, NULL, 1, 1, 0, 1, '2025-12-22 12:43:54', NULL),
(306, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', 1, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(307, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل ', 'place', 'lugar', 'lieu', 'Ort', 'plaats', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', 2, 1, NULL, 1, 1, 0, 1, '2025-12-27 12:12:08', NULL),
(308, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'apartments', 1, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(309, 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 'محل تجاري ', 'Commercial store', 'tienda comercial', 'Magasin commercial', 'Handelsgeschäft', 'Commerciële winkel', 1.00, NULL, '7367+VJQ Beni Ansar', NULL, NULL, NULL, 1, 'floorplots', 1, 1, NULL, NULL, NULL, 1, 0, NULL, '2025-12-23'),
(310, 'كيف حالك اخي', 'How are you, brother?', '¿Cómo estás hermano?', 'Comment vas-tu, mon frère ?', 'Wie geht es dir, Bruder?', 'Hoe gaat het, broer?', 'كيف حالك اخي', 'How are you, brother?', '¿Cómo estás hermano?', 'Comment vas-tu, mon frère ?', 'Wie geht es dir, Bruder?', 'Hoe gaat het, broer?', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 1, 'buy', 2, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(311, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'buy', 2, 1, '0000-00-00', 1, 1, 0, 0, NULL, '0000-00-00'),
(312, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 'منزل ', 'house', 'casa', 'maison', 'Haus', 'huis', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'buy', 12, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(313, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 'منزل ', 'house', 'casa', 'maison', 'Haus', 'huis', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'buy', 12, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(314, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'buy', 3, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(315, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'buy', 3, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(316, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'buy', 4, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(317, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'buy', 4, 1, NULL, 1, 1, 0, 0, NULL, NULL),
(318, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', '## مكتب العقارية يقدّم لكم اليوم عرضًا للبيع\r\n\r\nجاب ليكم مكتب العقارية اليوم دار للبيع  \r\nالموقع: بني أنصار  \r\n\r\n### مواصفات الدار:\r\n- عندها جوج واجهات  \r\n- فيها طابق أول  \r\n- المساحة الإجمالية: 153 متر مربع  \r\n- جاردة كبيرة  \r\n- 4 ديال البيوت  \r\n- صالون كبير وواسع ما شاء الله  \r\n- كراج كيهز حتى 3 ديال الطوموبيلات  \r\n\r\n### للاستفسار:\r\nإلى كان عندكم أي استفسار،  \r\nمكتب العقارية كيوفّر ليكم استشارة مجانية  \r\n\r\nوحتى اللي كيقلب على شي دار أو عقار،  \r\nيمكن ليكم تتواصلو معانا فالرقم اللي باين قدّامكم فالشاشة  \r\n\r\nنخليوكم دابا مع تكملة الفيديو  \r\nوشكرًا على المتابعة\r\n', '## The Real Estate Office presents to you today an offer for sale\r\n\r\nToday the real estate office brought you a house for sale  \r\nLocation: Beni Ansar  \r\n\r\n### House specifications:\r\n- She has facades  \r\n- It has a first floor  \r\n- Total area: 153 square meters  \r\n- A big jar  \r\n- 4 dial houses  \r\n- A large and spacious salon, God willing  \r\n- KHZ garage for up to 3 mobile phones  \r\n\r\n### For inquiries:\r\nIf you have any questions,  \r\nThe Real Estate Office will provide you with a free consultation  \r\n\r\nEven those who turn over a house or property,  \r\nYou can contact us using the number shown in front of you on the screen  \r\n\r\nWe will keep you safe with the continuation of the video  \r\nThank you for following', '## La Oficina de Bienes Raíces les presenta hoy una oferta de venta\r\n\r\nHoy la inmobiliaria les trajo una casa en venta  \r\nUbicación: Beni Ansar  \r\n\r\n### Especificaciones de la casa:\r\n- Ella tiene fachadas  \r\n- Tiene un primer piso.  \r\n- Superficie total: 153 metros cuadrados  \r\n- Un frasco grande  \r\n- 4 casas de marcación  \r\n- Un salón grande y espacioso, si Dios quiere.  \r\n- Garaje KHZ para hasta 3 teléfonos móviles.  \r\n\r\n### Para consultas:\r\nSi tienes alguna pregunta,  \r\nLa Oficina Inmobiliaria le proporcionará una consulta gratuita  \r\n\r\nIncluso aquellos que entregan una casa o propiedad,  \r\nPuede contactarnos usando el número que se muestra frente a usted en la pantalla.  \r\n\r\nTe mantendremos a salvo con la continuación del vídeo.  \r\nGracias por seguir', '## L\'Agence Immobilière vous présente aujourd\'hui une offre de vente\r\n\r\nAujourd\'hui, l\'agence immobilière vous a proposé une maison à vendre  \r\nLieu : Beni Ansar  \r\n\r\n### Spécifications de la maison :\r\n- Elle a des façades  \r\n- Il a un premier étage  \r\n- Superficie totale : 153 mètres carrés  \r\n- Un grand pot  \r\n- 4 maisons de cadran  \r\n- Un salon grand et spacieux, si Dieu le veut  \r\n- Garage KHZ pour jusqu\'à 3 téléphones portables  \r\n\r\n### Pour toute demande de renseignements :\r\nSi vous avez des questions,  \r\nL\'agence immobilière vous fournira une consultation gratuite  \r\n\r\nMême ceux qui cèdent une maison ou une propriété,  \r\nVous pouvez nous contacter en utilisant le numéro affiché devant vous sur l\'écran  \r\n\r\nNous vous garderons en sécurité avec la suite de la vidéo  \r\nMerci d\'avoir suivi', '## مكتب العقارية يقدّم لكم اليوم عرضًا للبيع\r\n\r\nجاب ليكم مكتب العقارية اليوم دار للبيع  \r\nالموقع: بني أنصار  \r\n\r\n### مواصفات الدار:\r\n- عندها جوج واجهات  \r\n- فيها طابق أول  \r\n- المساحة الإجمالية: 153 متر مربع  \r\n- جاردة كبيرة  \r\n- 4 ديال البيوت  \r\n- صالون كبير وواسع ما شاء الله  \r\n- كراج كيهز حتى 3 ديال الطوموبيلات  \r\n\r\n### للاستفسار:\r\nإلى كان عندكم أي استفسار،  \r\nمكتب العقارية كيوفّر ليكم استشارة مجانية  \r\n\r\nوحتى اللي كيقلب على شي دار أو عقار،  \r\nيمكن ليكم تتواصلو معانا فالرقم اللي باين قدّامكم فالشاشة  \r\n\r\nنخليوكم دابا مع تكملة الفيديو  \r\nوشكرًا على المتابعة', '## Het makelaarskantoor presenteert u vandaag een verkoopaanbod\r\n\r\nVandaag heeft het makelaarskantoor u een huis te koop aangeboden  \r\nLocatie: Beni Ansar  \r\n\r\n### Specificaties huis:\r\n- Ze heeft gevels  \r\n- Het heeft een eerste verdieping  \r\n- Totale oppervlakte: 153 vierkante meter  \r\n- Een grote pot  \r\n- 4 wijzerplaathuizen  \r\n- Een grote en ruime salon, als God het wil  \r\n- KHZ-garage voor maximaal 3 mobiele telefoons  \r\n\r\n### Voor vragen:\r\nAls u vragen heeft,  \r\nHet Vastgoedkantoor geeft u gratis advies  \r\n\r\nZelfs degenen die een huis of eigendom overdragen,  \r\nU kunt contact met ons opnemen via het nummer dat voor u op het scherm staat  \r\n\r\nWe houden je veilig met het vervolg van de video  \r\nBedankt voor het volgen', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'buy', 4, 1, NULL, 1, 1, 1, 1, '2025-12-29 16:05:53', '2025-12-29'),
(319, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zu verkaufen', 'Huis te koop', 1.00, NULL, '7367+VJQ Beni Ansar', 1, 1, 1, 11, 'rent', 1, 1, NULL, NULL, 1, 0, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `property_images`
--

CREATE TABLE `property_images` (
  `image_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_main` tinyint(1) DEFAULT 0,
  `display_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `property_images`
--

INSERT INTO `property_images` (`image_id`, `property_id`, `image_url`, `created_at`, `is_main`, `display_order`) VALUES
(480, 270, '1749048102928-317985996.JPG', '2025-06-04 14:41:42', 1, 0),
(481, 271, '1749048131403-432170217.JPG', '2025-06-04 14:42:11', 1, 0),
(485, 275, '1749131412671-656414611.jpg', '2025-06-05 13:50:12', 1, 0),
(486, 276, '1749133699492-935821194.jpg', '2025-06-05 14:28:19', 1, 0),
(489, 279, '1749133892033-284187165.jpg', '2025-06-05 14:31:32', 1, 0),
(490, 280, '1749134302093-94893610.jpg', '2025-06-05 14:38:22', 1, 0),
(491, 281, '1749225696296-806428592.jpg', '2025-06-06 16:01:36', 1, 0),
(492, 282, '1749227867991-979648167.jpg', '2025-06-06 16:37:48', 1, 0),
(493, 283, '1749227922787-912773248.JPG', '2025-06-06 16:38:42', 1, 0),
(495, 285, '1749227991369-456973092.jpg', '2025-06-06 16:39:51', 1, 0),
(496, 286, '1749228450185-749846390.jpg', '2025-06-06 16:47:30', 1, 0),
(497, 287, '1749548963688-664146415.jpg', '2025-06-10 09:49:23', 1, 0),
(498, 287, '1749548963770-330902982.jpg', '2025-06-10 09:49:23', 0, 1),
(500, 274, '1749555610837-460728420.png', '2025-06-10 11:40:11', 1, 0),
(502, 290, '1765881069183-638115346.PNG', '2025-12-16 10:31:09', 1, 0),
(540, 294, '1765895471661-396909748.jpg', '2025-12-16 14:31:11', 1, 0),
(541, 294, '1765895471738-116150258.jpg', '2025-12-16 14:31:11', 0, 1),
(554, 273, '1765969585876-472485460.png', '2025-12-17 11:06:26', 1, 0),
(555, 273, '1765969585931-724768005.png', '2025-12-17 11:06:26', 0, 1),
(556, 273, '1765969585990-300132221.png', '2025-12-17 11:06:26', 0, 2),
(557, 273, '1765969586044-269111954.png', '2025-12-17 11:06:26', 0, 3),
(558, 273, '1765969586066-695788113.png', '2025-12-17 11:06:26', 0, 4),
(559, 273, '1765969586118-479924267.png', '2025-12-17 11:06:26', 0, 5),
(561, 289, '1765977211029-634300713.jpg', '2025-12-17 13:13:31', 1, 0),
(562, 296, '1765977760176-169946268.png', '2025-12-17 13:22:40', 1, 0),
(566, 293, '1766059490527-609644385.webp', '2025-12-18 12:04:50', 1, 0),
(567, 293, '1766059490628-675202247.webp', '2025-12-18 12:04:50', 0, 1),
(568, 293, '1766059490714-675956203.webp', '2025-12-18 12:04:50', 0, 2),
(569, 298, '1766059596919-699080919.webp', '2025-12-18 12:06:37', 1, 0),
(570, 298, '1766059597009-65812002.webp', '2025-12-18 12:06:37', 0, 1),
(571, 298, '1766059597086-85885849.webp', '2025-12-18 12:06:37', 0, 2),
(572, 288, '1766059912184-261901901.webp', '2025-12-18 12:11:52', 1, 0),
(573, 291, '1766059988036-648445369.webp', '2025-12-18 12:13:08', 1, 0),
(574, 292, '1766060001264-744130099.webp', '2025-12-18 12:13:21', 1, 0),
(575, 284, '1766060023573-831288623.webp', '2025-12-18 12:13:43', 1, 0),
(576, 299, '1766233525662-660359198.webp', '2025-12-20 12:25:25', 1, 0),
(577, 300, '1766233726192-990410292.webp', '2025-12-20 12:28:46', 1, 0),
(578, 300, '1766233726271-503714048.webp', '2025-12-20 12:28:46', 0, 1),
(579, 301, '1766234766244-760633589.webp', '2025-12-20 12:46:06', 1, 0),
(580, 301, '1766234766357-289175667.webp', '2025-12-20 12:46:06', 0, 1),
(581, 301, '1766234766464-978239351.webp', '2025-12-20 12:46:06', 0, 2),
(582, 302, '1766235907384-222812275.webp', '2025-12-20 13:05:07', 1, 0),
(583, 302, '1766235907289-339530058.webp', '2025-12-20 13:05:07', 0, 1),
(584, 302, '1766235907200-733215714.webp', '2025-12-20 13:05:07', 0, 2),
(585, 302, '1766235907121-382970527.webp', '2025-12-20 13:05:07', 0, 3),
(586, 297, '1766240157755-800168161.webp', '2025-12-20 14:15:57', 1, 0),
(587, 297, '1766240157686-393424518.webp', '2025-12-20 14:15:57', 0, 1),
(588, 297, '1766240157589-633004725.webp', '2025-12-20 14:15:57', 0, 2),
(589, 297, '1766240157519-787130051.webp', '2025-12-20 14:15:57', 0, 3),
(590, 295, '1766240291764-775983950.webp', '2025-12-20 14:18:11', 1, 0),
(591, 295, '1766240291658-449110265.webp', '2025-12-20 14:18:11', 0, 1),
(592, 295, '1766240291578-624090364.webp', '2025-12-20 14:18:11', 0, 2),
(593, 295, '1766240291491-95073917.webp', '2025-12-20 14:18:11', 0, 3),
(594, 303, '1766240364659-757799152.webp', '2025-12-20 14:19:24', 1, 0),
(595, 303, '1766240364579-150636703.webp', '2025-12-20 14:19:24', 0, 1),
(596, 303, '1766240364489-878638345.webp', '2025-12-20 14:19:24', 0, 2),
(597, 304, '1766245588406-98351876.webp', '2025-12-20 15:46:28', 1, 0),
(598, 305, '1766247550576-495329456.webp', '2025-12-20 16:19:10', 1, 0),
(599, 306, '1766400437082-645538256.webp', '2025-12-22 10:47:17', 1, 0),
(600, 306, '1766400437236-753729391.webp', '2025-12-22 10:47:17', 0, 1),
(601, 306, '1766400437322-810320934.webp', '2025-12-22 10:47:17', 0, 2),
(602, 307, '1766404580811-762943335.webp', '2025-12-22 11:56:20', 1, 0),
(603, 308, '1766417018706-536711618.webp', '2025-12-22 15:23:38', 1, 0),
(604, 309, '1766499389191-377758651.webp', '2025-12-23 14:16:29', 1, 0),
(605, 310, '1766676020064-26407029.webp', '2025-12-25 15:20:20', 1, 0),
(606, 310, '1766676020145-649896277.webp', '2025-12-25 15:20:20', 0, 1),
(607, 310, '1766676020230-813656025.webp', '2025-12-25 15:20:20', 0, 2),
(608, 310, '1766676020312-768090212.webp', '2025-12-25 15:20:20', 0, 3),
(609, 310, '1766676020394-239486595.webp', '2025-12-25 15:20:20', 0, 4),
(610, 310, '1766676020471-667483607.webp', '2025-12-25 15:20:20', 0, 5),
(611, 310, '1766676020561-194813091.webp', '2025-12-25 15:20:20', 0, 6),
(612, 310, '1766676020665-279956324.webp', '2025-12-25 15:20:20', 0, 7),
(638, 312, '1767014067010-592988639.webp', '2025-12-29 13:14:27', 1, 0),
(639, 312, '1767014067127-793585161.webp', '2025-12-29 13:14:27', 0, 1),
(640, 313, '1767014146701-639245048.webp', '2025-12-29 13:15:49', 1, 0),
(641, 313, '1767014146827-605815229.webp', '2025-12-29 13:15:49', 0, 1),
(642, 313, '1767014146952-401685163.webp', '2025-12-29 13:15:49', 0, 2),
(643, 313, '1767014147070-286297763.webp', '2025-12-29 13:15:49', 0, 3),
(644, 313, '1767014147198-143572336.webp', '2025-12-29 13:15:49', 0, 4),
(645, 313, '1767014147309-732317786.webp', '2025-12-29 13:15:49', 0, 5),
(646, 313, '1767014147450-335916971.webp', '2025-12-29 13:15:49', 0, 6),
(647, 313, '1767014147579-237364032.webp', '2025-12-29 13:15:49', 0, 7),
(648, 313, '1767014147702-723580815.webp', '2025-12-29 13:15:49', 0, 8),
(649, 313, '1767014147820-858652636.webp', '2025-12-29 13:15:49', 0, 9),
(650, 313, '1767014147948-901488604.webp', '2025-12-29 13:15:49', 0, 10),
(651, 313, '1767014148097-700997896.webp', '2025-12-29 13:15:49', 0, 11),
(652, 313, '1767014148216-181046305.webp', '2025-12-29 13:15:49', 0, 12),
(653, 313, '1767014148332-133014172.webp', '2025-12-29 13:15:49', 0, 13),
(654, 313, '1767014148458-750596499.webp', '2025-12-29 13:15:49', 0, 14),
(655, 313, '1767014148602-91087694.webp', '2025-12-29 13:15:49', 0, 15),
(656, 313, '1767014148734-960533397.webp', '2025-12-29 13:15:49', 0, 16),
(657, 313, '1767014148841-3228889.webp', '2025-12-29 13:15:49', 0, 17),
(658, 313, '1767014148965-855556867.webp', '2025-12-29 13:15:49', 0, 18),
(659, 313, '1767014149114-93674755.webp', '2025-12-29 13:15:49', 0, 19),
(660, 313, '1767014149235-580150526.webp', '2025-12-29 13:15:49', 0, 20),
(661, 311, '1767014291166-901291642.webp', '2025-12-29 13:18:12', 1, 0),
(662, 311, '1767014291315-758091649.webp', '2025-12-29 13:18:12', 0, 1),
(663, 311, '1767014291463-41058681.webp', '2025-12-29 13:18:12', 0, 2),
(664, 311, '1767014291585-21564937.webp', '2025-12-29 13:18:12', 0, 3),
(665, 311, '1767014291707-325276775.webp', '2025-12-29 13:18:12', 0, 4),
(666, 311, '1767014291842-807487201.webp', '2025-12-29 13:18:12', 0, 5),
(667, 311, '1767014291988-109487117.webp', '2025-12-29 13:18:12', 0, 6),
(668, 311, '1767014292123-887767815.webp', '2025-12-29 13:18:12', 0, 7),
(669, 311, '1767014292262-25916216.webp', '2025-12-29 13:18:12', 0, 8),
(670, 314, '1767019746799-312791039.webp', '2025-12-29 14:49:09', 1, 0),
(671, 314, '1767019746912-162388022.webp', '2025-12-29 14:49:09', 0, 1),
(672, 314, '1767019747039-56211289.webp', '2025-12-29 14:49:09', 0, 2),
(673, 314, '1767019747260-410908378.webp', '2025-12-29 14:49:09', 0, 3),
(674, 314, '1767019747385-724579557.webp', '2025-12-29 14:49:09', 0, 4),
(675, 314, '1767019747509-446461395.webp', '2025-12-29 14:49:09', 0, 5),
(676, 314, '1767019747623-11472677.webp', '2025-12-29 14:49:09', 0, 6),
(677, 314, '1767019747736-132212558.webp', '2025-12-29 14:49:09', 0, 7),
(678, 314, '1767019747844-672029800.webp', '2025-12-29 14:49:09', 0, 8),
(679, 314, '1767019747942-446255803.webp', '2025-12-29 14:49:09', 0, 9),
(680, 314, '1767019748048-439865194.webp', '2025-12-29 14:49:09', 0, 10),
(681, 314, '1767019748153-273243699.webp', '2025-12-29 14:49:09', 0, 11),
(682, 314, '1767019748255-492464339.webp', '2025-12-29 14:49:09', 0, 12),
(683, 314, '1767019748354-142866268.webp', '2025-12-29 14:49:09', 0, 13),
(684, 314, '1767019748461-708807699.webp', '2025-12-29 14:49:09', 0, 14),
(685, 314, '1767019748586-681187898.webp', '2025-12-29 14:49:09', 0, 15),
(686, 314, '1767019748689-936175222.webp', '2025-12-29 14:49:09', 0, 16),
(687, 314, '1767019748806-413721342.webp', '2025-12-29 14:49:09', 0, 17),
(688, 314, '1767019748919-621074450.webp', '2025-12-29 14:49:09', 0, 18),
(689, 314, '1767019749020-630474846.webp', '2025-12-29 14:49:09', 0, 19),
(690, 314, '1767019749121-618640021.webp', '2025-12-29 14:49:09', 0, 20),
(691, 314, '1767019749221-178491601.webp', '2025-12-29 14:49:09', 0, 21),
(692, 314, '1767019749338-544998553.webp', '2025-12-29 14:49:09', 0, 22),
(693, 314, '1767019749441-568954613.webp', '2025-12-29 14:49:09', 0, 23),
(694, 314, '1767019749543-55287967.webp', '2025-12-29 14:49:09', 0, 24),
(695, 315, '1767019864265-656365237.webp', '2025-12-29 14:51:04', 1, 0),
(696, 315, '1767019864343-816565560.webp', '2025-12-29 14:51:04', 0, 1),
(697, 316, '1767022128535-250628373.webp', '2025-12-29 15:28:49', 1, 0),
(698, 316, '1767022128652-156994242.webp', '2025-12-29 15:28:49', 0, 1),
(699, 316, '1767022128719-219497956.webp', '2025-12-29 15:28:49', 0, 2),
(700, 316, '1767022128788-187499315.webp', '2025-12-29 15:28:49', 0, 3),
(701, 316, '1767022128854-732909164.webp', '2025-12-29 15:28:49', 0, 4),
(702, 316, '1767022128929-727825663.webp', '2025-12-29 15:28:49', 0, 5),
(703, 316, '1767022129002-489719449.webp', '2025-12-29 15:28:49', 0, 6),
(704, 317, '1767022191419-492051463.webp', '2025-12-29 15:29:54', 1, 0),
(705, 317, '1767022191532-870718101.webp', '2025-12-29 15:29:54', 0, 1),
(706, 317, '1767022191655-734207046.webp', '2025-12-29 15:29:54', 0, 2),
(707, 317, '1767022191758-162400162.webp', '2025-12-29 15:29:54', 0, 3),
(708, 317, '1767022191861-976188762.webp', '2025-12-29 15:29:54', 0, 4),
(709, 317, '1767022191969-547706134.webp', '2025-12-29 15:29:54', 0, 5),
(710, 317, '1767022192086-274237418.webp', '2025-12-29 15:29:54', 0, 6),
(711, 317, '1767022192201-70766311.webp', '2025-12-29 15:29:54', 0, 7),
(712, 317, '1767022192312-455499545.webp', '2025-12-29 15:29:54', 0, 8),
(713, 317, '1767022192413-583185309.webp', '2025-12-29 15:29:54', 0, 9),
(714, 317, '1767022192521-360110610.webp', '2025-12-29 15:29:54', 0, 10),
(715, 317, '1767022192644-985144640.webp', '2025-12-29 15:29:54', 0, 11),
(716, 317, '1767022192773-990317031.webp', '2025-12-29 15:29:54', 0, 12),
(717, 317, '1767022192930-979416249.webp', '2025-12-29 15:29:54', 0, 13),
(718, 317, '1767022193070-579335639.webp', '2025-12-29 15:29:54', 0, 14),
(719, 317, '1767022193283-143040215.webp', '2025-12-29 15:29:54', 0, 15),
(720, 317, '1767022193392-807593166.webp', '2025-12-29 15:29:54', 0, 16),
(721, 317, '1767022193495-920849324.webp', '2025-12-29 15:29:54', 0, 17),
(722, 317, '1767022193600-244538082.webp', '2025-12-29 15:29:54', 0, 18),
(723, 317, '1767022193700-753668199.webp', '2025-12-29 15:29:54', 0, 19),
(724, 317, '1767022193817-364516096.webp', '2025-12-29 15:29:54', 0, 20),
(725, 317, '1767022193918-684154653.webp', '2025-12-29 15:29:54', 0, 21),
(726, 317, '1767022194037-338096457.webp', '2025-12-29 15:29:54', 0, 22),
(727, 317, '1767022194141-213641859.webp', '2025-12-29 15:29:54', 0, 23),
(728, 317, '1767022194245-707370023.webp', '2025-12-29 15:29:54', 0, 24),
(729, 318, '1767024296725-60161919.webp', '2025-12-29 16:04:57', 1, 0),
(730, 318, '1767024296844-185850286.webp', '2025-12-29 16:04:57', 0, 1),
(731, 318, '1767024296957-604359237.webp', '2025-12-29 16:04:57', 0, 2),
(732, 318, '1767024297069-838965820.webp', '2025-12-29 16:04:57', 0, 3),
(733, 319, '1767103801311-544941264.webp', '2025-12-30 14:10:02', 1, 0),
(734, 319, '1767103801485-781112836.webp', '2025-12-30 14:10:02', 0, 1),
(735, 319, '1767103801620-105806749.webp', '2025-12-30 14:10:02', 0, 2),
(736, 319, '1767103801744-372881593.webp', '2025-12-30 14:10:02', 0, 3),
(737, 319, '1767103801871-860741567.webp', '2025-12-30 14:10:02', 0, 4),
(738, 319, '1767103802006-683318159.webp', '2025-12-30 14:10:02', 0, 5);

-- --------------------------------------------------------

--
-- Structure de la table `share_stats`
--

CREATE TABLE `share_stats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `share_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `share_stats`
--

INSERT INTO `share_stats` (`id`, `property_id`, `share_time`) VALUES
(5, 280, '2025-12-15 12:38:00'),
(6, 295, '2025-12-17 15:11:17'),
(7, 295, '2025-12-17 15:11:21'),
(8, 295, '2025-12-18 11:51:52'),
(9, 295, '2025-12-25 14:43:50'),
(10, 314, '2025-12-29 14:50:16');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'alaqariyya@gmail.com', '$2a$10$O16UNpO8FdP6DVQGp37E4u4MxAgo9CxsteHYOg3qqQYRskxFPTwb2', '2024-06-06 09:20:10');

-- --------------------------------------------------------

--
-- Structure de la table `visitor_details`
--

CREATE TABLE `visitor_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `visit_count` bigint(20) UNSIGNED DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `visitor_details`
--

INSERT INTO `visitor_details` (`id`, `ip_address`, `country`, `city`, `visit_count`) VALUES
(1, '::1', 'Unknown', 'Unknown', 3025);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Index pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`property_id`),
  ADD KEY `fk_properties_city` (`city_id`),
  ADD KEY `idx_properties_featured` (`is_featured`,`featured_at`);

--
-- Index pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `share_stats`
--
ALTER TABLE `share_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `visitor_details`
--
ALTER TABLE `visitor_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1184;

--
-- AUTO_INCREMENT pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT pour la table `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=320;

--
-- AUTO_INCREMENT pour la table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=739;

--
-- AUTO_INCREMENT pour la table `share_stats`
--
ALTER TABLE `share_stats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `visitor_details`
--
ALTER TABLE `visitor_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD CONSTRAINT `clickcount_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `properties`
--
ALTER TABLE `properties`
  ADD CONSTRAINT `fk_properties_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD CONSTRAINT `property_images_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `share_stats`
--
ALTER TABLE `share_stats`
  ADD CONSTRAINT `share_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
