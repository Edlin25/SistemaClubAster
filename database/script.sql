create database sistemaClubAster;

use sistemaClubAster;

create table estatus(
id_estatus int primary key auto_increment,
estatus varchar (15) not null
);


create table unidades(
    id_unidad int primary key auto_increment,
    unidad varchar (15) not null
); 

create table perfiles(
    id_perfil int primary key auto_increment,
    perfil varchar (15) not null
);

create table integrantes(
    id_integrantes int primary Key auto_increment,
    nombre varchar(50) not null,
    edad int not null,
    formatoIns varchar(10) not null,
    fechaIns date not null,
    correo varchar(50) not null,
    numeroCel varchar(15) not null,
    id_estatus int not null,
    id_unidad int not null,
    id_perfil int not null
);

create table tiposMovimientos(
    id_tipoMov int primary key auto_increment,
    folio varchar (10) not null,
    tipo varchar (10) not null,
    descripcion text not null,
    id_estatus int not null
);

create table movimientos(
    id_mov int primary key auto_increment,
    fecha date not null,
    cantidad int not null,
    concepto text not null,
    id_tipomov int not null,
    id_estatus int not null
);

create table reuniones(
    id_reunion int primary key auto_increment,
    fecha date not null,
    lugar varchar (50) not null,
    id_estatus int not null
);

create table detReuniones(
    id_detReunion int primary key auto_increment,
    puntualidad varchar (2) not null,
    disciplina varchar (2) not null,
    usoUniforme varchar (2) not null,
    aseoPersonal varchar (2) not null,
    id_reunion int not null,
    id_integrantes int not null,
    id_mov int not null,
    id_estatus int not null
);

alter table integrantes add constraint fk_integrantes_estatus foreign key (id_estatus) references estatus (id_estatus);
alter table integrantes add constraint fk_integrantes_unidad foreign key (id_unidad) references unidades (id_unidad);
alter table integrantes add constraint fk_integrantes_perfil foreign key (id_perfil) references perfiles (id_perfil);
alter table tiposMovimientos add constraint fk_tiposMovimientos_estatus foreign key (id_estatus) references estatus (id_estatus);
alter table movimientos add constraint fk_movimientos_tipoMov foreign key (id_tipoMov) references tiposMovimientos (id_tipoMov);
alter table movimientos add constraint fk_movimientos_estatus foreign key (id_estatus) references estatus (id_estatus);
alter table reuniones add constraint fk_reuniones_estatus foreign key (id_estatus) references estatus (id_estatus);
alter table detReuniones add constraint fk_detReuniones_reunion foreign key (id_reunion) references reuniones (id_reunion);
alter table detReuniones add constraint fk_detReuniones_integrantes foreign key (id_integrantes) references integrantes (id_integrantes);
alter table detReuniones add constraint fk_detReuniones_movimientos foreign key (id_mov) references movimientos (id_mov);
alter table detReuniones add constraint fk_detReuniones_estatus foreign key (id_estatus) references estatus (id_estatus);