-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2023 a las 08:09:10
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
(2, 'JapandFood', 'La mejor streetfood Japonesa de tu zona', '652555149', 'bbva xativa', 'https://cdn.pixabay.com/photo/2021/01/01/15/31/sushi-balls-5878892_1280.jpg', 'Activo', 'Comida Japonesa', '14:00', '3', '2023-03-12 16:13:34', '2023-05-14 18:51:43'),
(3, 'VeryRapidosWey', 'Los tacos más picantes y sabrosos de Méjico cerca de ti ', '654147854', 'plaza la concepción , Ontinyent', 'https://cdn.pixabay.com/photo/2017/05/11/11/37/van-2303881_1280.jpg', 'Activo', 'Comida Mexicana', '14:00', '2', '2023-03-12 16:13:34', '2023-05-14 18:51:43'),
(4, 'AsadosStreet', 'La carne más sabrosa al más puro estilo argentino', '635487598', 'ajuntament de Xativa', 'https://cdn.pixabay.com/photo/2014/08/12/20/28/beef-416966_1280.jpg', 'Inactivo', 'Comida Argentina', '12:50', '1', '2023-03-12 16:13:34', '2023-05-16 05:47:25'),
(5, 'HotDogs4you', 'Que mejor cena que unos perritos con patatas !', '698575533', 'Avinguda almaig, ontinyent', 'https://cdn.pixabay.com/photo/2021/02/15/11/43/hot-dog-6017568_1280.jpg', 'Activo', 'Hamburguesas y Hot Dogs', '14:00', '3', '2023-03-12 16:13:34', '2023-05-14 18:51:43'),
(6, 'Churrotruck', 'Churros y porras con chocolate recién hechos.', '962223735', 'ajuntament de xativa', 'https://cdn.pixabay.com/photo/2016/10/24/17/24/churreria-1766714_1280.jpg', 'Inactivo', 'Churrerias', '12:50', '1', '2023-03-12 16:13:34', '2023-05-16 05:47:25'),
(7, 'PizzaExpress', 'No tenemos horno de leña pero si el más puro estilo italiano', '678254123', 'plaza la bassa XAtiva', 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg', 'Activo', 'Comida Italiana', '14:00', '2', '2023-03-12 16:13:34', '2023-05-14 18:51:43'),
(8, 'GelatsL\'Estació', 'A qui no li fa un gelat després de clase , t\'esperem !', '962282365', 'IES l\'estacio', 'https://cdn.pixabay.com/photo/2017/09/08/19/42/ice-cream-van-2729884_1280.jpg', 'Inactivo', 'Helados', '12:50', '1', '2023-03-12 16:13:34', '2023-05-16 05:47:25'),
(9, 'Taco\'sTruckExpress', 'Los mejores tacos al mejor precio los tienes aquí.', '968822332', 'Family cash xativa', 'https://cdn.pixabay.com/photo/2017/11/13/03/56/mango-catfish-taco-2944558_1280.jpg', 'Activo', 'Comida Mexicana', '14:00', '2', '2023-03-12 16:13:34', '2023-05-14 18:51:43'),
(13, 'Mi negocio', 'Ut impedit fugit omnis molestiae omnis. Culpa mollitia aut aut totam id quis deleniti.', '72222', '32046 Irma MewsSouth Edmond, HI 45920-9174', NULL, 'Activo', 'Comida Peruana', '16:00', '26', '2023-04-21 13:55:24', '2023-05-14 18:51:43'),
(14, 'Mi negocio 2', 'mi negocio2', '687654332', 'xativa', NULL, 'Activo', 'Comida Francesa', '00:00', '26', '2023-04-21 14:34:38', '2023-05-14 18:51:43'),
(15, 'Nacho&Tacos', ' ¿Unos nachos con queso y unos tacos para picar ? ', '666666666', 'bbva xativa', 'https://cdn.pixabay.com/photo/2020/11/11/17/39/nachos-5733142_1280.jpg', 'Activo', 'Comida Mexicana', '00:00', '26', '2023-04-21 14:35:23', '2023-05-14 18:51:43'),
(16, 'Smile&Burgers', 'Las mejores hamburguesas en tu ciudad .', '962226666', 'gran teatre xàtiva', 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg', 'Inactivo', 'Hamburguesas y Hot Dogs', '12:50', '1', '2023-04-23 11:27:46', '2023-05-16 05:47:25'),
(17, 'Mi nuevo negocio ADmin', 'mi nuevo negocioadmin', '962221234', 'xativa', 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg', 'Activo', 'Comida Peruana', '00:00', '25', '2023-05-06 20:32:53', '2023-05-14 18:51:43');

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
(1, 'raquel', 'raquel@raquel.com', '2023-03-12 16:13:33', '$2y$10$kBCBEFc8q65kkELz2OXMv.T9MT6l/sB7nxj.okDESq3Z.OZ8S4dAe', 'y0EQJiwPjm', 'jXWqnO1EmzbPnqZtKNIihsRTs9zTOsHXADhSAcvBOQS80Uut62nVEPhsQBJR', '2023-05-16 05:21:31', '2023-05-17 05:21:31', 'propietario', 'https://picsum.photos/200/300?random=5', '+1-520-214-2520', 'xativa', '2023-03-12 16:13:34', '2023-05-16 05:21:31'),
(2, 'pepe', 'qvon@example.net', '2023-03-12 16:13:34', '$2y$10$uef/aLIPO07c/ljf2AkleuboYIRRYrmAslKl6JRztO4hYU5rcp3/K', 'fLIBH1ihR4', 'jMnbPGK031jJ4h4hBPU6O5GZaJ5O27Kn4TMd3T4IdO4Mwyk0DDUGSdOyJTNF', '2023-03-26 08:00:30', '2023-03-27 08:00:30', 'user', 'https://picsum.photos/200/300?random=3', '+1-989-980-4082', '926 Margie Cape Apt. 889\nPort Tessville, KS 24771-4911', '2023-03-12 16:13:34', '2023-04-08 16:36:46'),
(3, 'Borja', 'user@user.com', '2023-03-12 16:13:34', '$2y$10$LNT2huswni/I39V1xO7qdOSZGtOeOjt0BSQLwh1Sw0ufvkI9Z8Vui', '9KwT5cbJPO', 'JouHhUuio4wPCvjvqc8ALlbvcCSjoFkJVORHNkne4yMbGqaIcWrlsbD9UU6c', '2023-05-17 04:07:37', '2023-05-18 04:07:37', 'user', 'https://picsum.photos/200/300?random=9', '722271252', 'Xativa', '2023-03-12 16:13:34', '2023-05-17 04:07:37'),
(4, 'Coty Kling II', 'vbogisich@example.com', '2023-03-12 16:13:34', '$2y$10$/7m92SB.zAc71utP9OXtje3zCWRRfO7E6YZFJzAoc2NPhkC5CtAwq', 'ShaAhYam34', 'aN98KuLMxwrlU7b6Xq7olEFjM9xhDCtcE5qnCx4BIGTMX4RkSQe7Nu7lYsbJTwiqfT6RPioUue6tLVyZ', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=3', '+17263931186', '1420 Jack Rue\nNorth Vallie, IN 46190-1192', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(5, 'Mr. Kieran Schuppe', 'hackett.jovan@example.net', '2023-03-12 16:13:34', '$2y$10$lRuPcREg6RwuLJhec83wY.Kgn8coiZcTaeQN53Wp9ggjteFbr6NHG', 'jjpBa74duN', '1a3i6LLENc7zRSvjCGIWkAmXz7baIN3EXu4NMLq0gQ4X8bfCoMjGbdHN6N6ZnY5XMYvAg5oQtisHJdoS', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=7', '(754) 429-1385', '576 Greenholt Meadows Apt. 107\nFeilton, AL 49475-5007', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(6, 'Aron Herzog', 'laila12@example.org', '2023-03-12 16:13:34', '$2y$10$IEuPsXDF2MNpbOE3OsIrQu4uyGsXorkvatx.32bENtXOiaAsw5LTa', 'LHNfUHwZD8', 'kthBM8rsprK7lJEiMvA2Kv9R2Dh6sBwLhfadIQiMkot0Uad1wTNvxhzroVqk86pqr8A1PYZMQa9EiNXr', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=8', '1-814-426-9311', '8347 Carroll Parks\nNicolastown, CT 51617-6922', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(7, 'Jade Gutmann', 'miller.jeremy@example.net', '2023-03-12 16:13:34', '$2y$10$mEmr1hIzKgl3jl8lEILzC.c7Fs2MHyKSOoU71q9jACNgQ7xGmJv/u', 'lbqxbyksBw', 'pWLkuca3Cx79dodup8YOim5oQrunmfLySeQyu4GViGFdEXHbdJCMbwbrowNQYodArhExKOoxzWrtFWnH', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=6', '262.799.3617', '39797 Labadie Square\nDallinborough, MO 66132', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(8, 'Leilani Rath DVM', 'lance74@example.net', '2023-03-12 16:13:34', '$2y$10$qFOQeUfWHVeZg8YvfN3kxOB.uyTA4xOgwkB.es0lmNUIVAm05PqBy', 'S8GmHGOhnd', 'KVnG5amNcaHkbtcBL587WPLoy7FAaFi4tqtTYzLTTb1arLPOfVFUvBsZncuS2uWmGVOoik1raHxJpRav', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=4', '1-985-298-8157', '7155 Kilback Dale\nFaheystad, GA 55843', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(9, 'Eve Baumbach', 'keely57@example.com', '2023-03-12 16:13:34', '$2y$10$eOcuR7OuGYZee9Ij.15QZeoYtCpl8xEqPxgkF8fossS7iH1fkqTJO', 'Z9X8uSJmoD', 'RGgxpX6SxsbvVPt3wRdaws7RMvo0lAog2e8e9Fc6PsgTqCEHqj6NNbhMZ1jWidSZdJVv2CjTVZ65biWX', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=7', '(858) 412-7502', '2693 Bins Turnpike\nSanfordfurt, FL 20272', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(10, 'Isabella Williamson Sr.', 'amaya37@example.com', '2023-03-12 16:13:34', '$2y$10$rIiPsn0uOr8om.PD0rcgMOger4CqidPy8dRTEuwZLJMYidR7vBgwW', 'YD2wzaa0Xk', 'qri1nBOrfn6xaCeIo1opsNX3LUrcDhbw5X32cLyJSdDVyKxStPBj7Z070VbiSsP4uQZLv5MMnl4Nlh2T', '2023-03-12 16:13:34', '2023-03-13 16:13:34', 'user', 'https://picsum.photos/200/300?random=4', '(281) 747-9484', '4210 Karelle Prairie Suite 559\nWest Felipemouth, AZ 55410', '2023-03-12 16:13:34', '2023-03-12 16:13:34'),
(25, 'Administrador', 'admin@admin.com', '2023-03-12 16:13:34', '$2y$10$DGj4RdJRsvpKRtUpU0BRa.2/nxfmK0reCGoi/pNBD0JsrvLF9Frt6', 'YD2wzaa0Xk', 'FbdvuhzmccpQX6DPWd9758QVMzVz1GWJk1HLMdEDDpD62NlHvJdCrNO8FhKd', '2023-05-17 04:05:40', '2023-05-18 04:05:40', 'admin', 'https://picsum.photos/200/300?random=4', '722271252', 'Xativa , valencia', '2023-03-12 16:13:34', '2023-05-17 04:05:40'),
(26, 'pepe', 'p@p.com', '2023-04-19 18:08:44', '$2y$10$.RjGoB6XDbk7JwiOeOfI6ei8Jmzr/pfLXmfmDexuKkRAIX2KwwFCS', NULL, 'NksRd3IfLVaRd8FOmlFfDrZSZtWsRGGaeDLr6TWoj21yztF5la4ghCyGsbxL', '2023-04-22 12:30:16', '2023-04-23 12:30:16', 'propietario', NULL, '123456789', 'xativa', '2023-04-19 18:08:44', '2023-04-22 12:30:16'),
(27, 'pruebaadmin', 'padmin@padmin.com', NULL, '$2y$10$0ExSAt0oxaO8ZyKu2liEmegpak10D25HkXmhvA1bdzskrGCI61uAi', NULL, NULL, NULL, NULL, 'admin', NULL, NULL, NULL, '2023-04-23 15:54:22', '2023-04-23 15:54:22'),
(28, 'Emilio', 'Emilio@emilio.com', '2023-05-14 11:56:46', '$2y$10$1kUjJo0lmPdNDwQJIwXnk.mxLi03flwadIC6j/umDOJrcvcdq8f/e', NULL, '7cQ5fkhTBxqo6Si2O7ZkmDRSFad6hnLBSN3y9Q98JbS9buz9t2z0WEHJZo1p', '2023-05-14 13:53:32', '2023-05-15 13:53:32', 'user', NULL, '92222222', 'chapinería', '2023-05-14 11:56:46', '2023-05-14 13:53:32');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
