-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 06 oct. 2024 à 19:39
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
-- Structure de la table `clickcount_state`
--

CREATE TABLE `clickcount_state` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `click_count` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `clickcount_stats`
--

CREATE TABLE `clickcount_stats` (
  `id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `click_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clickcount_stats`
--

INSERT INTO `clickcount_stats` (`id`, `property_id`, `click_time`) VALUES
(1, 68, '2024-09-30 07:37:41'),
(2, 120, '2024-09-30 07:37:51'),
(3, 118, '2024-09-30 07:38:11'),
(4, 68, '2024-09-30 08:56:49'),
(5, 68, '2024-09-30 15:01:28'),
(7, 61, '2024-09-30 15:27:13'),
(8, 58, '2024-09-30 15:30:06'),
(9, 123, '2024-09-30 17:43:27'),
(10, 103, '2024-09-30 17:43:37'),
(11, 120, '2024-09-30 17:43:47'),
(12, 113, '2024-09-30 17:43:55'),
(13, 101, '2024-09-30 17:44:00'),
(14, 67, '2024-10-01 07:52:42'),
(15, 124, '2024-10-01 14:56:31'),
(16, 107, '2024-10-01 14:56:43'),
(17, 101, '2024-10-01 15:03:47'),
(18, 102, '2024-10-02 07:51:09'),
(19, 122, '2024-10-02 07:51:29'),
(20, 107, '2024-10-02 07:51:32'),
(21, 104, '2024-10-02 07:51:35'),
(22, 83, '2024-10-02 07:54:42'),
(23, 58, '2024-10-02 07:55:10'),
(24, 106, '2024-10-02 14:16:23'),
(25, 58, '2024-10-02 14:47:12'),
(26, 61, '2024-10-02 14:51:31'),
(27, 123, '2024-10-02 15:27:03'),
(28, 58, '2024-10-02 15:58:44'),
(29, 123, '2024-10-02 16:30:44'),
(30, 101, '2024-10-02 16:30:50'),
(31, 120, '2024-10-02 16:32:33'),
(32, 61, '2024-10-02 16:33:04'),
(33, 104, '2024-10-02 16:35:09'),
(34, 106, '2024-10-02 16:35:12'),
(35, 105, '2024-10-02 16:35:14'),
(36, 58, '2024-10-02 16:35:31'),
(37, 100, '2024-10-02 16:35:34'),
(38, 118, '2024-10-02 16:35:36'),
(39, 102, '2024-10-02 16:36:56'),
(40, 122, '2024-10-02 16:41:05'),
(41, 106, '2024-10-02 16:44:12'),
(42, 100, '2024-10-02 16:44:28'),
(43, 101, '2024-10-02 16:44:32'),
(44, 58, '2024-10-02 16:45:04'),
(45, 113, '2024-10-02 16:45:09'),
(46, 82, '2024-10-02 16:45:16'),
(47, 82, '2024-10-02 16:45:20'),
(48, 124, '2024-10-02 16:45:27'),
(49, 58, '2024-10-02 16:46:28'),
(50, 61, '2024-10-02 16:46:32'),
(51, 106, '2024-10-02 16:46:40'),
(52, 61, '2024-10-02 16:48:00'),
(53, 107, '2024-10-02 16:51:07'),
(54, 103, '2024-10-02 16:51:20'),
(55, 82, '2024-10-02 16:51:25'),
(56, 122, '2024-10-02 16:51:52'),
(57, 124, '2024-10-02 16:52:30'),
(58, 125, '2024-10-02 16:52:36'),
(59, 125, '2024-10-02 16:56:57'),
(60, 122, '2024-10-02 17:14:54'),
(61, 124, '2024-10-02 17:22:40'),
(62, 82, '2024-10-02 17:23:20'),
(63, 102, '2024-10-03 08:40:38'),
(64, 83, '2024-10-03 08:58:10'),
(65, 120, '2024-10-03 09:13:07'),
(66, 67, '2024-10-03 09:13:10'),
(67, 58, '2024-10-03 09:13:19'),
(68, 107, '2024-10-03 09:15:32'),
(69, 61, '2024-10-03 09:16:39'),
(70, 122, '2024-10-03 10:10:32'),
(71, 102, '2024-10-03 10:11:03'),
(72, 124, '2024-10-03 10:12:50'),
(73, 122, '2024-10-03 11:54:52'),
(74, 122, '2024-10-03 11:55:12'),
(75, 125, '2024-10-03 11:55:31'),
(76, 107, '2024-10-03 11:57:47'),
(77, 106, '2024-10-03 11:57:56'),
(78, 68, '2024-10-03 11:58:21'),
(79, 103, '2024-10-03 11:58:31'),
(81, 83, '2024-10-03 11:58:44'),
(82, 125, '2024-10-03 11:59:08'),
(83, 122, '2024-10-03 11:59:19'),
(84, 114, '2024-10-03 12:00:30'),
(85, 123, '2024-10-03 12:08:44'),
(86, 106, '2024-10-03 14:18:18'),
(87, 93, '2024-10-03 14:18:23'),
(88, 118, '2024-10-03 14:19:13'),
(89, 104, '2024-10-03 14:49:18'),
(90, 105, '2024-10-03 14:58:15'),
(91, 123, '2024-10-03 14:58:33'),
(92, 68, '2024-10-03 14:59:03'),
(93, 83, '2024-10-03 15:07:15'),
(94, 107, '2024-10-03 15:13:55'),
(95, 61, '2024-10-03 15:14:59'),
(96, 61, '2024-10-03 15:15:39'),
(97, 58, '2024-10-03 15:15:55'),
(98, 106, '2024-10-03 15:16:41'),
(99, 102, '2024-10-03 15:17:08'),
(100, 82, '2024-10-03 15:18:02'),
(101, 103, '2024-10-03 15:18:08'),
(102, 118, '2024-10-03 15:18:17'),
(103, 83, '2024-10-03 15:25:46'),
(104, 82, '2024-10-03 15:31:57'),
(105, 61, '2024-10-03 15:32:04'),
(107, 122, '2024-10-03 15:59:27'),
(108, 104, '2024-10-03 15:59:36'),
(109, 118, '2024-10-03 15:59:47'),
(110, 67, '2024-10-03 16:01:23'),
(111, 104, '2024-10-03 16:01:51'),
(112, 100, '2024-10-03 16:04:55'),
(113, 123, '2024-10-03 16:09:47'),
(114, 123, '2024-10-03 16:10:00'),
(115, 118, '2024-10-03 16:10:02'),
(116, 124, '2024-10-03 16:27:09'),
(117, 122, '2024-10-03 16:27:52'),
(118, 124, '2024-10-03 16:33:24'),
(119, 118, '2024-10-03 16:33:53'),
(120, 125, '2024-10-03 16:34:48'),
(121, 103, '2024-10-03 16:45:14'),
(122, 106, '2024-10-03 16:45:22'),
(123, 58, '2024-10-03 16:45:25'),
(124, 120, '2024-10-03 16:45:28'),
(125, 125, '2024-10-03 16:53:36'),
(126, 114, '2024-10-03 16:54:03'),
(127, 125, '2024-10-03 17:05:42'),
(128, 124, '2024-10-03 17:10:37'),
(129, 58, '2024-10-03 17:15:28'),
(130, 103, '2024-10-03 17:19:19'),
(131, 102, '2024-10-03 17:19:46'),
(132, 65, '2024-10-03 17:20:43'),
(133, 65, '2024-10-03 17:20:56'),
(134, 120, '2024-10-04 08:10:01'),
(135, 125, '2024-10-04 08:11:12'),
(136, 105, '2024-10-04 08:12:03'),
(137, 105, '2024-10-04 08:46:22'),
(138, 82, '2024-10-04 08:46:40'),
(139, 82, '2024-10-04 08:53:36'),
(140, 93, '2024-10-04 08:57:57'),
(141, 82, '2024-10-04 08:58:01'),
(142, 107, '2024-10-04 09:00:55'),
(143, 83, '2024-10-04 09:01:22'),
(144, 105, '2024-10-04 09:06:30'),
(145, 102, '2024-10-04 09:12:44'),
(146, 100, '2024-10-04 09:12:47'),
(147, 106, '2024-10-04 09:12:55'),
(148, 82, '2024-10-04 09:12:57'),
(149, 104, '2024-10-04 09:13:00'),
(150, 102, '2024-10-04 09:39:33'),
(151, 65, '2024-10-04 09:39:50'),
(152, 120, '2024-10-04 09:39:56'),
(154, 65, '2024-10-04 09:40:01'),
(155, 122, '2024-10-04 09:40:04'),
(156, 104, '2024-10-04 09:40:07'),
(157, 105, '2024-10-04 09:41:35'),
(158, 122, '2024-10-04 09:42:21'),
(159, 102, '2024-10-04 09:42:29'),
(160, 101, '2024-10-04 09:45:37'),
(161, 61, '2024-10-04 10:02:39'),
(162, 83, '2024-10-04 10:02:42'),
(163, 124, '2024-10-04 10:02:46'),
(164, 67, '2024-10-04 10:03:36'),
(165, 61, '2024-10-04 10:13:56'),
(166, 125, '2024-10-04 10:33:44'),
(167, 118, '2024-10-04 10:33:52'),
(168, 61, '2024-10-04 10:34:21'),
(169, 113, '2024-10-04 10:34:35'),
(170, 100, '2024-10-04 10:35:14'),
(171, 104, '2024-10-04 10:39:49'),
(172, 102, '2024-10-04 10:50:35'),
(173, 107, '2024-10-04 10:53:05'),
(174, 100, '2024-10-04 10:53:50'),
(175, 93, '2024-10-04 10:55:58'),
(176, 82, '2024-10-04 10:56:20'),
(177, 83, '2024-10-04 10:56:26'),
(178, 106, '2024-10-04 10:56:31'),
(179, 82, '2024-10-04 11:04:05'),
(180, 105, '2024-10-04 11:04:12'),
(181, 126, '2024-10-04 11:31:27'),
(182, 126, '2024-10-04 11:32:39'),
(183, 102, '2024-10-04 11:41:46'),
(184, 58, '2024-10-04 11:42:34'),
(185, 100, '2024-10-04 11:42:44'),
(186, 105, '2024-10-04 11:43:50'),
(187, 118, '2024-10-04 15:01:02'),
(188, 122, '2024-10-04 15:03:40'),
(189, 83, '2024-10-04 15:03:46'),
(190, 120, '2024-10-04 15:12:26'),
(191, 61, '2024-10-04 15:12:34'),
(192, 114, '2024-10-04 15:12:58'),
(193, 113, '2024-10-04 15:14:29'),
(194, 103, '2024-10-04 15:15:22'),
(195, 107, '2024-10-04 15:20:10'),
(196, 103, '2024-10-04 15:26:37'),
(197, 82, '2024-10-04 15:26:53'),
(198, 107, '2024-10-04 15:29:23'),
(199, 102, '2024-10-04 15:29:27'),
(201, 104, '2024-10-04 15:30:07'),
(202, 122, '2024-10-04 15:30:25'),
(203, 102, '2024-10-04 15:41:57'),
(204, 113, '2024-10-04 15:42:00'),
(205, 101, '2024-10-04 15:42:16'),
(206, 125, '2024-10-04 15:42:34'),
(207, 118, '2024-10-04 15:42:42'),
(208, 118, '2024-10-04 15:42:59'),
(209, 102, '2024-10-04 15:43:49'),
(212, 114, '2024-10-04 15:47:35'),
(213, 118, '2024-10-04 15:48:45'),
(214, 82, '2024-10-04 15:49:02'),
(215, 106, '2024-10-04 15:49:04'),
(216, 125, '2024-10-04 15:49:16'),
(217, 61, '2024-10-04 15:55:03'),
(218, 118, '2024-10-04 15:55:30'),
(219, 83, '2024-10-04 15:55:44'),
(220, 126, '2024-10-04 15:55:56'),
(221, 104, '2024-10-04 15:56:00'),
(222, 104, '2024-10-04 15:56:02'),
(223, 101, '2024-10-04 15:56:05'),
(224, 100, '2024-10-04 15:56:25'),
(225, 104, '2024-10-04 15:56:51'),
(226, 114, '2024-10-04 15:57:29'),
(227, 65, '2024-10-04 15:59:13'),
(228, 58, '2024-10-04 15:59:24'),
(229, 101, '2024-10-04 15:59:27'),
(230, 102, '2024-10-04 15:59:34'),
(231, 103, '2024-10-04 15:59:47'),
(232, 65, '2024-10-04 15:59:49'),
(233, 118, '2024-10-04 15:59:59'),
(234, 104, '2024-10-04 16:00:06'),
(235, 61, '2024-10-04 16:00:16'),
(236, 102, '2024-10-04 16:00:20'),
(237, 106, '2024-10-04 16:00:22'),
(238, 118, '2024-10-04 16:00:25'),
(239, 58, '2024-10-04 16:02:23'),
(240, 61, '2024-10-04 16:02:34'),
(241, 104, '2024-10-04 16:06:57'),
(242, 65, '2024-10-04 16:15:36'),
(243, 107, '2024-10-04 16:16:24'),
(244, 120, '2024-10-04 16:35:38'),
(245, 58, '2024-10-04 16:35:43'),
(246, 82, '2024-10-04 16:36:23'),
(247, 104, '2024-10-04 16:50:09'),
(248, 120, '2024-10-04 16:50:14'),
(249, 82, '2024-10-04 16:50:57'),
(250, 82, '2024-10-04 16:52:04'),
(251, 100, '2024-10-04 16:52:45'),
(252, 113, '2024-10-04 17:19:13'),
(253, 122, '2024-10-06 09:31:06'),
(254, 127, '2024-10-06 09:33:09'),
(255, 68, '2024-10-06 09:33:38'),
(257, 118, '2024-10-06 09:45:16'),
(258, 82, '2024-10-06 09:46:08'),
(259, 113, '2024-10-06 09:46:34'),
(260, 100, '2024-10-06 09:46:37'),
(261, 113, '2024-10-06 09:46:39'),
(262, 100, '2024-10-06 09:48:40'),
(263, 102, '2024-10-06 09:51:58'),
(264, 125, '2024-10-06 09:53:57'),
(265, 120, '2024-10-06 09:54:22'),
(266, 118, '2024-10-06 09:54:33'),
(267, 122, '2024-10-06 09:54:40'),
(268, 126, '2024-10-06 09:55:00'),
(269, 126, '2024-10-06 09:59:12'),
(270, 126, '2024-10-06 09:59:36'),
(271, 128, '2024-10-06 10:01:40'),
(272, 102, '2024-10-06 10:07:38'),
(273, 58, '2024-10-06 10:08:32'),
(274, 105, '2024-10-06 10:10:11'),
(275, 68, '2024-10-06 10:11:17'),
(276, 118, '2024-10-06 10:11:29'),
(277, 58, '2024-10-06 10:16:12'),
(278, 107, '2024-10-06 10:17:16'),
(279, 105, '2024-10-06 10:17:22'),
(280, 127, '2024-10-06 10:18:33'),
(281, 120, '2024-10-06 10:22:18'),
(282, 61, '2024-10-06 10:22:24'),
(283, 61, '2024-10-06 13:02:08'),
(284, 120, '2024-10-06 17:11:42'),
(285, 129, '2024-10-06 17:13:16'),
(286, 129, '2024-10-06 17:13:50'),
(287, 122, '2024-10-06 17:15:26'),
(288, 65, '2024-10-06 17:18:14'),
(289, 114, '2024-10-06 17:18:34'),
(290, 122, '2024-10-06 17:18:43');

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
(21, 'fgfgd', 'fhgdffh@gmail.com', 'dfhghh', 'ss', 'fdhfg', '2024-08-28 18:52:51');

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
  `content_ar` text NOT NULL,
  `content_en` text DEFAULT NULL,
  `content_fr` text DEFAULT NULL,
  `content_es` text DEFAULT NULL,
  `content_de` text DEFAULT NULL,
  `content_nl` text DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `title_ar`, `title_en`, `title_fr`, `title_es`, `title_de`, `title_nl`, `content_ar`, `content_en`, `content_fr`, `content_es`, `content_de`, `content_nl`, `image_url`, `published_at`) VALUES
(25, 'كتاب', 'book', 'livre', 'libro', 'Buch', 'boek', 'كتاب', 'book', 'livre', 'libro', 'Buch', 'boek', 'IMG_6515.jpg', '2024-09-29 08:58:15'),
(26, 'كتاب', 'book', 'livre', 'libro', 'Buch', 'boek', 'كتاب', 'book', 'livre', 'libro', 'Buch', 'boek', '1.jpg', '2024-09-29 09:08:35');

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
  `location_ar` varchar(255) NOT NULL,
  `exact_address` varchar(255) NOT NULL,
  `location_en` varchar(255) DEFAULT NULL,
  `location_es` varchar(255) DEFAULT NULL,
  `location_fr` varchar(255) DEFAULT NULL,
  `location_de` varchar(255) DEFAULT NULL,
  `location_nl` varchar(255) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `salon` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `area` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `available` tinyint(1) DEFAULT 1,
  `availability_date` date DEFAULT NULL,
  `floors` int(11) DEFAULT NULL,
  `kitchen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `properties`
--

INSERT INTO `properties` (`property_id`, `title_ar`, `title_en`, `title_es`, `title_fr`, `title_de`, `title_nl`, `description_ar`, `description_en`, `description_es`, `description_fr`, `description_de`, `description_nl`, `price`, `old_price`, `location_ar`, `exact_address`, `location_en`, `location_es`, `location_fr`, `location_de`, `location_nl`, `bedrooms`, `salon`, `bathrooms`, `area`, `type`, `available`, `availability_date`, `floors`, `kitchen`) VALUES
(58, 'شقة ', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 2500.00, NULL, 'فاس', '', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, '0000-00-00', 0, 1),
(61, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', '', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(65, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 250.00, 2500.00, 'فاس', '7335+6WC Beni Ansar', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, '0000-00-00', 0, 1),
(67, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', '', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 10, 'rent', 1, '0000-00-00', 0, 1),
(68, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', '', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(82, 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 10.00, 554515.00, 'الناضور', '7379+44W, Beni Ansar', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 1, 1, 1, 144, 'rent', 1, '0000-00-00', 0, 1),
(83, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 9.00, NULL, 'بني انصار، الطريق الرئيسية حي عبد المومن', '', 'Bani Ansar, the main road, Abdul Mumin neighborhood', 'Bani Ansar, el camino principal, Abdul Mumin Barrio', 'Bani Ansar, la route principale, quartier Abdul Mumin', 'Bani Ansar, die Hauptstraße, Abdul Mumin Viertel', 'Bani Ansar, The Main Road, Abdul Mumin Neighborhood', 1, 1, 1, 90, 'regularRent', 0, NULL, 1, 1),
(93, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 4.00, 11.00, 'بني انصارحي عبد ', '', 'Bani Insahi Abd Bani', 'Bani insahi abd bani', 'Bani insahi Abd Bani', 'Bani Insahi Abd Bani', 'Bani Insahi Abd Bani', 0, 0, 0, 11, 'Commercialgarages', 0, '0000-00-00', 0, 0),
(100, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'regularRent', 0, NULL, 5, 1),
(101, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 111, 1, 1, 11, 'buy', 0, '0000-00-00', 1, 1),
(102, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 8.00, 11.00, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, '0000-00-00', 0, 1),
(103, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(104, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(105, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء ليس في المغرب', 'Apartment for rental is not in Morocco', 'El apartamento para alquiler no está en Marruecos', 'L\'appartement pour la location n\'est pas au Maroc', 'Wohnung für die Miete ist nicht in Marokko', 'Appartement voor huur is niet in Marokko', 11.00, NULL, 'بني انصارحي عبد المومن', '53C9+37 Nador, Maroc', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, '0000-00-00', 0, 1),
(106, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', '', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(107, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zum Verkauf', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zum Verkauf', 'Huis te koop', 4.00, NULL, '1', '', '1', '1', '1', '1', '1', NULL, NULL, NULL, 1, 'floorplots', 0, NULL, NULL, NULL),
(113, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 89.00, 90.00, 'الناظور', '', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 0, 0, 0, 50, 'Commercialgarages', 0, '0000-00-00', 0, 0),
(114, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 1.00, NULL, 'الناظور', '', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 50, 'Commercialgarages', 0, NULL, NULL, NULL),
(118, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 99.00, NULL, 'الناظور', '', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 99, 99, 99, 99, 'Commercialgarages', 0, NULL, 99, 99),
(120, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'كتاب', 'book', 'libro', 'livre', 'Buch', 'boek', 1.00, NULL, 'شقة', '', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', NULL, NULL, NULL, 1, 'Commercialgarages', 0, NULL, NULL, NULL),
(122, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 7.00, NULL, 'الناظور', '7369+RFR, Beni Ansar', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 7, 7, 7, 7, 'rent', 1, '0000-00-00', 0, 7),
(123, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1999.00, NULL, 'شقة', '', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', NULL, NULL, NULL, 1999, 'Commercialgarages', 0, NULL, NULL, NULL),
(124, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 7777.00, NULL, 'شقة', '', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1, 1, 1, 1, 'buy', 0, NULL, 1, 1),
(125, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 7777.00, NULL, 'شقة', '', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1, 1, 1, 1, 'buy', 0, NULL, 1, 1),
(126, 'الرئيس بوتين', 'President Putin', 'Presidente Putin', 'Président Poutine', 'Präsident Putin', 'President Poetin', 'أكد الناطق باسم الكرملين، ديمتري بيسكوف، الجمعة، أن الرئيس الروسي فلاديمير بوتين منفتح على أي اتصالات، بما في ذلك مع نظيره الأميركي جو بايدن.\r\n\r\nوأشار إلى أنه حتى الآن لم يكن هناك حديث حول هذه القضية بين موسكو وواشنطن، وأن القرار بشأن زيارة الرئيس بوتين إلى البرازيل لحضور قمة مجموعة العشرين لم يتخذ حتى الآن.', 'The Kremlin spokesman, Dmitry Peskov, confirmed on Friday that Russian President Vladimir Putin is open to any contacts, including with his American counterpart, Joe Biden.\r\n\r\n He pointed out that until now there was no talk about this issue between Moscow and Washington, and that the decision on President Putin\'s visit to Brazil to attend the G20 summit has not been taken yet.', 'El portavoz del Kremlin, Dmitry Peskov, confirmó el viernes que el presidente ruso Vladimir Putin está abierto a cualquier contacto, incluso con su homólogo estadounidense, Joe Biden.\r\n\r\n Señaló que hasta ahora no se hablaba de este problema entre Moscú y Washington, y que la decisión sobre la visita del presidente Putin a Brasil para asistir a la cumbre del G20 aún no se ha tomado.', 'Le porte-parole du Kremlin, Dmitry Peskov, a confirmé vendredi que le président russe Vladimir Poutine était ouvert à tous les contacts, y compris avec son homologue américain, Joe Biden.\r\n\r\n Il a souligné que jusqu\'à présent, on ne parlait pas de cette question entre Moscou et Washington, et que la décision sur la visite du président Poutine au Brésil pour assister au sommet du G20 n\'a pas encore été prise.', 'Der Kreml -Sprecher Dmitry Peskov bestätigte am Freitag, dass der russische Präsident Wladimir Putin für Kontakte offen ist, einschließlich seines amerikanischen Gegenstücks Joe Biden.\r\n\r\n Er wies darauf hin, dass es bisher kein Gespräch über dieses Problem zwischen Moskau und Washington gab und dass die Entscheidung über den Besuch von Präsident Putins in Brasilien, am G20 -Gipfel teilzunehmen, noch nicht getroffen wurde.', 'De woordvoerder van Kremlin, Dmitry Peskov, bevestigde vrijdag dat de Russische president Vladimir Poetin openstaat voor eventuele contacten, ook met zijn Amerikaanse tegenhanger, Joe Biden.\r\n\r\n Hij wees erop dat er tot nu toe geen sprake was van deze kwestie tussen Moskou en Washington, en dat de beslissing over het bezoek van president Poetin aan Brazilië om de G20 -top bij te wonen nog niet is genomen.', 121.00, 7777.00, 'بني انصار, حي مسجد النور', '7379+44W, Beni Ansar', 'Bani Ansar, Al -Nour Mosque neighborhood', 'Bani Ansar, vecindario de la mezquita de Al -Nour', 'Bani Ansar, quartier de la mosquée al -nour', 'Bani Ansar, Al -Nour -Moschee -Nachbarschaft', 'Bani Ansar, Al -Nour Moskee Neighborhood', 1, 1, 1, 1, 'buy', 0, '0000-00-00', 1, 1),
(127, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 1999.00, NULL, 'شقة', '7379+44W, Beni Ansar', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', NULL, NULL, NULL, 1999, 'floorplots', 0, NULL, NULL, NULL),
(128, 'الرئيس بوتين', 'President Putin', 'Presidente Putin', 'Président Poutine', 'Präsident Putin', 'President Poetin', 'الرئيس بوتين', 'President Putin', 'Presidente Putin', 'Président Poutine', 'Präsident Putin', 'President Poetin', 7777.00, NULL, 'بني انصار, حي مسجد النور', '7379+44W, Beni Ansar', 'Bani Ansar, Al -Nour Mosque neighborhood', 'Bani Ansar, vecindario de la mezquita de Al -Nour', 'Bani Ansar, quartier de la mosquée al -nour', 'Bani Ansar, Al -Nour -Moschee -Nachbarschaft', 'Bani Ansar, Al -Nour Moskee Neighborhood', 1, 1, 1, 1, 'regularRent', 0, NULL, 1, 1),
(129, 'شقة للكراء مع شقة للكراء', 'Apartment for rental with an apartment for rent', 'Apartamento para alquiler con un apartamento en alquiler', 'Appartement pour la location avec un appartement à louer', 'Wohnung für Miete mit einer Wohnung zur Miete', 'Appartement voor verhuur met een appartement te huur', 'شقة للكراء مع شقة للكراء', 'Apartment for rental with an apartment for rent', 'Apartamento para alquiler con un apartamento en alquiler', 'Appartement pour la location avec un appartement à louer', 'Wohnung für Miete mit einer Wohnung zur Miete', 'Appartement voor verhuur met een appartement te huur', 199.00, 1999.00, 'شقة', '7379+V54, Beni Ansar', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 0, 0, 0, 1999, 'floorplots', 0, '0000-00-00', 0, 0);

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
(156, 58, '1724088025382.jpg', '2024-08-19 17:20:25', 1, 0),
(160, 61, '1724142558436.jpg', '2024-08-20 08:29:18', 1, 0),
(164, 65, '1724152559928.jpg', '2024-08-20 11:16:00', 1, 0),
(166, 67, '1724154819302.jpg', '2024-08-20 11:53:39', 1, 0),
(167, 68, '1724154819377.jpg', '2024-08-20 11:53:39', 1, 0),
(181, 82, '1724176325590.png', '2024-08-20 17:52:05', 1, 0),
(182, 83, '1724176708531.png', '2024-08-20 17:58:28', 1, 0),
(202, 93, '1724842218730.PNG', '2024-08-28 10:50:18', 1, 0),
(209, 100, '1725263467191.jpg', '2024-09-02 07:51:07', 1, 0),
(210, 101, '1725272809289.jpg', '2024-09-02 10:26:49', 1, 0),
(211, 102, '1725295610418.jpg', '2024-09-02 16:46:50', 1, 0),
(212, 102, '1725295610471.jpg', '2024-09-02 16:46:50', 0, 1),
(213, 102, '1725295610511.jpg', '2024-09-02 16:46:50', 0, 2),
(214, 102, '1725295610551.jpg', '2024-09-02 16:46:50', 0, 3),
(215, 103, '1725298567926.jpg', '2024-09-02 17:36:07', 1, 0),
(216, 104, '1725351811385.jpg', '2024-09-03 08:23:31', 1, 0),
(217, 104, '1725351811449.jpg', '2024-09-03 08:23:31', 0, 1),
(218, 104, '1725351811495.jpg', '2024-09-03 08:23:31', 0, 2),
(219, 105, '1725448061944.jpg', '2024-09-04 11:07:42', 1, 0),
(220, 105, '1725448062102.jpg', '2024-09-04 11:07:42', 0, 1),
(221, 105, '1725448062164.jpg', '2024-09-04 11:07:42', 0, 2),
(222, 105, '1725448062220.jpg', '2024-09-04 11:07:42', 0, 3),
(223, 105, '1725448062277.jpg', '2024-09-04 11:07:42', 0, 4),
(224, 105, '1725448062333.jpg', '2024-09-04 11:07:42', 0, 5),
(225, 105, '1725448062391.jpg', '2024-09-04 11:07:42', 0, 6),
(226, 105, '1725448062445.jpg', '2024-09-04 11:07:42', 0, 7),
(227, 106, '1726133473343.jpg', '2024-09-12 09:31:13', 1, 0),
(228, 107, '1726143730119.jpg', '2024-09-12 12:22:10', 1, 0),
(235, 113, '1726826994659.jpg', '2024-09-20 10:09:54', 1, 0),
(236, 114, '1727004582788.jpg', '2024-09-22 11:29:42', 1, 0),
(249, 118, '1727432010353.jpg', '2024-09-27 10:13:30', 1, 0),
(250, 118, '1727432010456.jpg', '2024-09-27 10:13:30', 0, 1),
(251, 118, '1727432010558.jpg', '2024-09-27 10:13:30', 0, 2),
(252, 118, '1727432010667.jpg', '2024-09-27 10:13:30', 0, 3),
(261, 120, '1727600882532.jpg', '2024-09-29 09:08:02', 1, 0),
(262, 120, '1727600882585.jpg', '2024-09-29 09:08:02', 0, 1),
(263, 120, '1727600882662.jpg', '2024-09-29 09:08:02', 0, 2),
(264, 120, '1727600882732.jpg', '2024-09-29 09:08:02', 0, 3),
(267, 122, '1727601295342.png', '2024-09-29 09:14:55', 1, 0),
(268, 123, '1727718198186.png', '2024-09-30 17:43:18', 1, 0),
(269, 124, '1727794573443.jpg', '2024-10-01 14:56:13', 1, 0),
(270, 124, '1727794573538.jpg', '2024-10-01 14:56:13', 0, 1),
(271, 125, '1727887942761.jpg', '2024-10-02 16:52:23', 1, 0),
(272, 125, '1727887942864.jpg', '2024-10-02 16:52:23', 0, 1),
(273, 125, '1727887942930.jpg', '2024-10-02 16:52:23', 0, 2),
(274, 125, '1727887942996.jpg', '2024-10-02 16:52:23', 0, 3),
(275, 125, '1727887943066.jpg', '2024-10-02 16:52:23', 0, 4),
(276, 125, '1727887943233.jpg', '2024-10-02 16:52:23', 0, 5),
(277, 125, '1727887943384.jpg', '2024-10-02 16:52:23', 0, 6),
(278, 126, '1728041474877.jpg', '2024-10-04 11:31:16', 1, 0),
(279, 126, '1728041475045.jpg', '2024-10-04 11:31:16', 0, 1),
(280, 126, '1728041475117.jpg', '2024-10-04 11:31:16', 0, 2),
(281, 126, '1728041475180.jpg', '2024-10-04 11:31:16', 0, 3),
(282, 126, '1728041475246.jpg', '2024-10-04 11:31:16', 0, 4),
(283, 126, '1728041475314.jpg', '2024-10-04 11:31:16', 0, 5),
(284, 126, '1728041475383.jpg', '2024-10-04 11:31:16', 0, 6),
(285, 126, '1728041475450.jpg', '2024-10-04 11:31:16', 0, 7),
(286, 126, '1728041475507.jpg', '2024-10-04 11:31:16', 0, 8),
(287, 126, '1728041475590.jpg', '2024-10-04 11:31:16', 0, 9),
(288, 126, '1728041475661.jpg', '2024-10-04 11:31:16', 0, 10),
(289, 126, '1728041475731.jpg', '2024-10-04 11:31:16', 0, 11),
(290, 126, '1728041475811.jpg', '2024-10-04 11:31:16', 0, 12),
(291, 126, '1728041475884.jpg', '2024-10-04 11:31:16', 0, 13),
(292, 126, '1728041475945.jpg', '2024-10-04 11:31:16', 0, 14),
(293, 126, '1728041476009.jpg', '2024-10-04 11:31:16', 0, 15),
(294, 126, '1728041476079.jpg', '2024-10-04 11:31:16', 0, 16),
(295, 126, '1728041476137.jpg', '2024-10-04 11:31:16', 0, 17),
(296, 126, '1728041476206.jpg', '2024-10-04 11:31:16', 0, 18),
(297, 127, '1728207177318-723726738.jpg', '2024-10-06 09:32:57', 1, 0),
(298, 128, '1728208891033-442079158.jpg', '2024-10-06 10:01:31', 1, 0),
(299, 129, '1728234780516-565404735.jpg', '2024-10-06 17:13:00', 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `share_stats`
--

CREATE TABLE `share_stats` (
  `id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `share_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `share_stats`
--

INSERT INTO `share_stats` (`id`, `property_id`, `share_time`) VALUES
(1, 58, '2024-09-30 15:30:07'),
(2, 67, '2024-10-01 07:52:43'),
(3, 124, '2024-10-03 10:24:16'),
(4, 124, '2024-10-03 11:47:17'),
(5, 122, '2024-10-03 16:27:59'),
(6, 67, '2024-10-04 10:12:34');

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
  `id` int(11) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `visit_count` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `visitor_details`
--

INSERT INTO `visitor_details` (`id`, `ip_address`, `country`, `city`, `visit_count`) VALUES
(1, '::1', 'Unknown', 'Unknown', 195);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

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
  ADD PRIMARY KEY (`property_id`);

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
-- AUTO_INCREMENT pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=291;

--
-- AUTO_INCREMENT pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT pour la table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=300;

--
-- AUTO_INCREMENT pour la table `share_stats`
--
ALTER TABLE `share_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `visitor_details`
--
ALTER TABLE `visitor_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  ADD CONSTRAINT `clickcount_state_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`);

--
-- Contraintes pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD CONSTRAINT `clickcount_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;

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
