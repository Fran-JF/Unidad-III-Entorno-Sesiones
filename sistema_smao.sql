-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-12-2022 a las 20:19:25
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema smao`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id_e` int(16) NOT NULL,
  `nombre_e` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_e` text COLLATE utf8_spanish_ci NOT NULL,
  `serial_e` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_puesta_marcha_e` date NOT NULL,
  `fecha_puesta_marcha_mante_e` date NOT NULL,
  `fecha_ultimo_mantenimiento_e` date NOT NULL,
  `id_trabajo_mantenimiento_e` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id_e`, `nombre_e`, `descripcion_e`, `serial_e`, `fecha_puesta_marcha_e`, `fecha_puesta_marcha_mante_e`, `fecha_ultimo_mantenimiento_e`, `id_trabajo_mantenimiento_e`) VALUES
(26, 'CANAIMA3', 'Mini Laptop del gobierno', 'ASVRVOLNDVA', '2022-11-26', '2022-11-26', '2022-12-30', 3),
(27, 'CANAIMA3', 'Mini Laptop del gobierno', 'ASVRVOLNDVA', '2022-11-26', '2022-11-26', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE `trabajos` (
  `id_t` int(16) NOT NULL,
  `fecha_planificada_t` date NOT NULL,
  `fecha_inicio_mante_t` date NOT NULL,
  `fecha_final_mante_t` date NOT NULL,
  `estatus_mante_t` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `id_equipo_t` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`id_t`, `fecha_planificada_t`, `fecha_inicio_mante_t`, `fecha_final_mante_t`, `estatus_mante_t`, `id_equipo_t`) VALUES
(0, '2022-11-23', '2022-11-25', '2022-11-24', 'activo', 26),
(2, '2022-12-24', '2022-12-24', '2022-12-24', 'activo', 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_u` int(11) NOT NULL,
  `rol_u` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `usuario_u` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `password_u` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_u`, `rol_u`, `usuario_u`, `password_u`) VALUES
(8, 'admin', 'Anggelo', '$2a$08$.nyYoT36gsSDyXy4tYhVMeo3xuI7L31BNnrY7e1bfIel1mtG9MKuy'),
(9, 'user', 'Maikol', '$2a$08$yhTrn7ngxcAejNt8EYxoY.vdMvbinfaGjrZ59xBYkOAofXfYNHsPO');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id_e`);

--
-- Indices de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD UNIQUE KEY `id_t` (`id_t`),
  ADD KEY `id_del_equipo_trabajado` (`id_equipo_t`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_u`),
  ADD UNIQUE KEY `usuario_u` (`usuario_u`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id_e` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD CONSTRAINT `id_del_equipo_trabajdo` FOREIGN KEY (`id_equipo_t`) REFERENCES `equipos` (`id_e`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
