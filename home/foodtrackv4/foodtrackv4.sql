-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-04-2023 a las 09:41:38
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `foodtrackv4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foodtrucks`
--

CREATE TABLE `foodtrucks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `TipoComida` varchar(255) NOT NULL,
  `horario` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `foodtrucks`
--

INSERT INTO `foodtrucks` (`id`, `nombre`, `descripcion`, `telefono`, `ubicacion`, `avatar`, `status`, `TipoComida`, `horario`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 'Thelma Murray', 'Vero exercitationem cum velit est omnis voluptas dicta. Quia impedit ad velit est et aut vel ut. Aspernatur aut molestias reiciendis cum nam iste.', '863.416.7330', '416 Demetris Viaduct Apt. 306\nJakubowskitown, CO 82444-1018', 'https://via.placeholder.com/640x480.png/0022ee?text=quas', 'Inactivo', 'Comida Japonesa', '14:00', '3', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(3, 'Lamont Haag', 'Ut repudiandae delectus libero aliquid. Nulla molestiae sapiente quis sint dolores blanditiis minima.', '726-526-9850', '1839 Therese Rest\nEwaldtown, MT 03289-2784', 'https://via.placeholder.com/640x480.png/0066aa?text=veritatis', 'Inactivo', 'Comida Mexicana', '14:00', '2', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(4, 'HotDogs', 'Odio reprehenderit sit aut facilis. Est et doloremque quisquam dolores dolore totam dicta. Repellendus repellat dolore est voluptas rerum.', '+1-361-594-3081', 'IES l\'estacio', 'https://via.placeholder.com/640x480.png/0066cc?text=aut', 'Inactivo', 'Comida Italiana', '14:00', '1', '2023-03-12 16:13:34', '2023-04-08 14:56:37'),
(5, 'Prof. Madison Windler', 'Facilis quod deserunt ut non sed. Sit laboriosam inventore ducimus unde. Voluptatem rem velit unde reprehenderit eaque corrupti. Qui et non eius.', '+1.931.966.5849', '648 Senger Forks\nOwenshire, IA 41024-0648', 'https://via.placeholder.com/640x480.png/00ccaa?text=molestiae', 'Inactivo', 'Comida Americana', '14:00', '3', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(6, 'Churrerias canuto', 'Mil churros al minuto', '962223735', '4549 Demetrius ClubEast Vitoberg, RI 91894-2542', 'https://via.placeholder.com/640x480.png/008899?text=qui', 'Activo', 'Comida Italiana', '19:48', '1', '2023-03-12 16:13:34', '2023-04-04 17:59:08'),
(7, 'Coleman Kautzer', 'Maiores itaque voluptates ut consequuntur magnam distinctio sapiente. Eligendi est unde et accusantium dolorum vel. Ut qui numquam magni nihil sint voluptas. Quam quo aut vero nihil quo optio nulla.', '352-861-4314', '9189 Macejkovic Camp\nWest Elnora, MS 52353-5828', 'https://via.placeholder.com/640x480.png/008855?text=omnis', 'Activo', 'Comida Italiana', '14:00', '2', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(8, 'Dora Koch', 'Ab voluptatem rerum et qui atque alias qui. Omnis consequatur ipsa et deleniti illo optio. Iusto aliquid tempora harum quos. Voluptatum nisi autem quia aperiam.', '+15807708629', '8932 Schuster Fort Apt. 898Port Kallie, MO 96785-6593', 'https://via.placeholder.com/640x480.png/007799?text=quis', 'Inactivo', 'Comida Japonesa', '19:03', '1', '2023-03-12 16:13:34', '2023-04-04 18:00:05'),
(9, 'Bonnie Heidenreich I', 'Tempore aut ipsa in excepturi et expedita fugit quis. Vel ut dignissimos recusandae. Ducimus est facere vero dolorem.', '260-262-5524', '237 Joy Valley Apt. 963\nJakubowskiton, IN 78309', 'https://via.placeholder.com/640x480.png/00ffff?text=voluptatum', 'Activo', 'Comida Mexicana', '14:00', '2', '2023-03-12 16:13:34', '2023-03-12 16:13:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_03_05_230148_creacion_usuarios', 1),
(6, '2023_03_11_202039_foodtrucks', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `api_token` varchar(80) DEFAULT NULL,
  `date_createtoken` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `avatar` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `api_token`, `date_createtoken`, `expires_at`, `role`, `avatar`, `telefono`, `ubicacion`, `created_at`, `updated_at`) VALUES
(1, 'raquel', 'raquel@raquel.com', '2023-03-12 16:13:33', '$2y$10$kBCBEFc8q65kkELz2OXMv.T9MT6l/sB7nxj.okDESq3Z.OZ8S4dAe', 'y0EQJiwPjm', 'eDnSsvxU6PXN04wFOJMMApCDGXSqJjf4FVWvL4XO6zcZ4pZiJkx48eV4nFB9', '2023-04-09 06:32:38', '2023-04-10 06:32:38', 'propietario', 'https://picsum.photos/200/300?random=5', '+1-520-214-2520', 'xativa', '2023-03-12 16:13:34', '2023-04-09 06:32:38'),
(2, 'pepe', 'qvon@example.net', '2023-03-12 16:13:34', '$2y$10$uef/aLIPO07c/ljf2AkleuboYIRRYrmAslKl6JRztO4hYU5rcp3/K', 'fLIBH1ihR4', 'jMnbPGK031jJ4h4hBPU6O5GZaJ5O27Kn4TMd3T4IdO4Mwyk0DDUGSdOyJTNF', '2023-03-26 08:00:30', '2023-03-27 08:00:30', 'user', 'https://picsum.photos/200/300?random=3', '+1-989-980-4082', '926 Margie Cape Apt. 889\nPort Tessville, KS 24771-4911', '2023-03-12 16:13:34', '2023-04-08 16:36:46'),
(3, 'Janis Daniel', 'user@user.com', '2023-03-12 16:13:34', '$2y$10$4A9sAJPEmQAmo6Je9/rkOeVFbOFvX.JrOZu9toB44NVhRFdDWI/Ca', '9KwT5cbJPO', 'SBjF77ClUa6foYGzQlejopVKGaglTVTp9vcoDslnfHDDGlQA4So51M62lGFn', '2023-04-09 07:17:19', '2023-04-10 07:17:19', 'user', 'https://picsum.photos/200/300?random=9', '1-272-767-7343', '346 Sonya Ridge\nMohrtown, TX 64751-1013', '2023-03-12 16:13:34', '2023-04-09 07:17:19'),
(4, 'Coty Kling II', 'vbogisich@example.com', '2023-03-12 16:13:34', '$2y$10$/7m92SB.zAc71utP9OXtje3zCWRRfO7E6YZFJzAoc2NPhkC5CtAwq', 'ShaAhYam34', 'aN98KuLMxwrlU7b6Xq7olEFjM9xhDCtcE5qnCx4BIGTMX4RkSQe7Nu7lYsbJTwiqfT6RPioUue6tLVyZ', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=3', '+17263931186', '1420 Jack Rue\nNorth Vallie, IN 46190-1192', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(5, 'Mr. Kieran Schuppe', 'hackett.jovan@example.net', '2023-03-12 16:13:34', '$2y$10$lRuPcREg6RwuLJhec83wY.Kgn8coiZcTaeQN53Wp9ggjteFbr6NHG', 'jjpBa74duN', '1a3i6LLENc7zRSvjCGIWkAmXz7baIN3EXu4NMLq0gQ4X8bfCoMjGbdHN6N6ZnY5XMYvAg5oQtisHJdoS', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=7', '(754) 429-1385', '576 Greenholt Meadows Apt. 107\nFeilton, AL 49475-5007', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(6, 'Aron Herzog', 'laila12@example.org', '2023-03-12 16:13:34', '$2y$10$IEuPsXDF2MNpbOE3OsIrQu4uyGsXorkvatx.32bENtXOiaAsw5LTa', 'LHNfUHwZD8', 'kthBM8rsprK7lJEiMvA2Kv9R2Dh6sBwLhfadIQiMkot0Uad1wTNvxhzroVqk86pqr8A1PYZMQa9EiNXr', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=8', '1-814-426-9311', '8347 Carroll Parks\nNicolastown, CT 51617-6922', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(7, 'Jade Gutmann', 'miller.jeremy@example.net', '2023-03-12 16:13:34', '$2y$10$mEmr1hIzKgl3jl8lEILzC.c7Fs2MHyKSOoU71q9jACNgQ7xGmJv/u', 'lbqxbyksBw', 'pWLkuca3Cx79dodup8YOim5oQrunmfLySeQyu4GViGFdEXHbdJCMbwbrowNQYodArhExKOoxzWrtFWnH', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=6', '262.799.3617', '39797 Labadie Square\nDallinborough, MO 66132', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(8, 'Leilani Rath DVM', 'lance74@example.net', '2023-03-12 16:13:34', '$2y$10$qFOQeUfWHVeZg8YvfN3kxOB.uyTA4xOgwkB.es0lmNUIVAm05PqBy', 'S8GmHGOhnd', 'KVnG5amNcaHkbtcBL587WPLoy7FAaFi4tqtTYzLTTb1arLPOfVFUvBsZncuS2uWmGVOoik1raHxJpRav', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=4', '1-985-298-8157', '7155 Kilback Dale\nFaheystad, GA 55843', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(9, 'Eve Baumbach', 'keely57@example.com', '2023-03-12 16:13:34', '$2y$10$eOcuR7OuGYZee9Ij.15QZeoYtCpl8xEqPxgkF8fossS7iH1fkqTJO', 'Z9X8uSJmoD', 'RGgxpX6SxsbvVPt3wRdaws7RMvo0lAog2e8e9Fc6PsgTqCEHqj6NNbhMZ1jWidSZdJVv2CjTVZ65biWX', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=7', '(858) 412-7502', '2693 Bins Turnpike\nSanfordfurt, FL 20272', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(10, 'Isabella Williamson Sr.', 'amaya37@example.com', '2023-03-12 16:13:34', '$2y$10$rIiPsn0uOr8om.PD0rcgMOger4CqidPy8dRTEuwZLJMYidR7vBgwW', 'YD2wzaa0Xk', 'qri1nBOrfn6xaCeIo1opsNX3LUrcDhbw5X32cLyJSdDVyKxStPBj7Z070VbiSsP4uQZLv5MMnl4Nlh2T', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=4', '(281) 747-9484', '4210 Karelle Prairie Suite 559\nWest Felipemouth, AZ 55410', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(25, 'Administrador', 'admin@admin.com', '2023-03-12 16:13:34', '$2y$10$rIiPsn0uOr8om.PD0rcgMOger4CqidPy8dRTEuwZLJMYidR7vBgwW', 'YD2wzaa0Xk', 'rAamO1nQOb1DXfFCkP7Vznc8JzWWr39Ovhe5KWMRq55KqgBaxZQlqRDn2aKj', '2023-04-09 07:17:01', '2023-04-10 07:17:01', 'admin', 'https://picsum.photos/200/300?random=4', '123456789', 'Xativa , valencia', '2023-03-12 16:13:34', '2023-04-09 07:17:01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `foodtrucks`
--
ALTER TABLE `foodtrucks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_email_unique` (`email`),
  ADD UNIQUE KEY `usuarios_api_token_unique` (`api_token`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `foodtrucks`
--
ALTER TABLE `foodtrucks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
