-- ========================================
-- CREACIÓN DE TABLAS PARA API_EMPRESA_PUBLICIDAD
-- ========================================

-- Eliminamos si existen
DROP TABLE IF EXISTS comentarios;
DROP TABLE IF EXISTS publicaciones;
DROP TABLE IF EXISTS empresa;

-- ========================================
-- TABLA: EMPRESA
-- ========================================
CREATE TABLE empresa (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT NOT NULL,
    Nombre NVARCHAR(100) NOT NULL,
    Tipo NVARCHAR(50),
    Descripcion NVARCHAR(255),
    Ubicacion NVARCHAR(150),
    contactos NVARCHAR(100),
    Correo NVARCHAR(100),
    imagen NVARCHAR(255),

    CONSTRAINT FK_Empresa_Usuario FOREIGN KEY (usuario_id)
        REFERENCES usuarios(ID)
        ON DELETE CASCADE
);

-- ========================================
-- TABLA: PUBLICACIONES
-- ========================================
CREATE TABLE publicaciones (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    empresa_id INT NOT NULL,
    categoria_id INT NULL,
    Titulo NVARCHAR(150) NOT NULL,
    Descripcion NVARCHAR(255),
    imagen NVARCHAR(255),

    CONSTRAINT FK_Publicaciones_Empresa FOREIGN KEY (empresa_id)
        REFERENCES empresa(ID)
        ON DELETE CASCADE
);

-- ========================================
-- TABLA: COMENTARIOS
-- ========================================
CREATE TABLE comentarios (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    publicacion_id INT NOT NULL,
    user_id INT NOT NULL,
    comentario NVARCHAR(255) NOT NULL,

    CONSTRAINT FK_Comentarios_Publicacion FOREIGN KEY (publicacion_id)
        REFERENCES publicaciones(ID)
        ON DELETE CASCADE,

    CONSTRAINT FK_Comentarios_Usuario FOREIGN KEY (user_id)
        REFERENCES usuarios(ID)
        ON DELETE CASCADE
);
