# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DimEstudiantes(models.Model):
    id_estudiante = models.AutoField(primary_key=True)
    eco_condicion_electrodomesticos = models.TextField(blank=True, null=True)
    eco_condicion_tic = models.TextField(blank=True, null=True)
    eco_condicion_vive = models.TextField(blank=True, null=True)
    eco_condicion_vivienda = models.TextField(blank=True, null=True)
    estu_consecutivo = models.TextField(blank=True, null=True)
    estu_discapacidad = models.TextField(blank=True, null=True)
    estu_genero = models.TextField(blank=True, null=True)
    estu_numero_libros = models.TextField(blank=True, null=True)
    estu_rango_edad = models.TextField(blank=True, null=True)
    estu_trabaja = models.TextField(blank=True, null=True)
    fami_estrato_vivienda = models.TextField(blank=True, null=True)
    fami_ingreso_fmiliar_mensual = models.TextField(blank=True, null=True)
    fami_max_nivel_educa_padres = models.TextField(blank=True, null=True)
    fami_nivel_sisben = models.TextField(blank=True, null=True)
    fami_ocup_madre = models.TextField(blank=True, null=True)
    fami_ocup_padre = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_estudiantes'


class DimInstituciones(models.Model):
    id_institucion = models.AutoField(primary_key=True)
    cole_bilingue = models.TextField(blank=True, null=True)
    cole_caracter = models.TextField(blank=True, null=True)
    cole_genero = models.TextField(blank=True, null=True)
    cole_jornada = models.TextField(blank=True, null=True)
    cole_naturaleza = models.TextField(blank=True, null=True)
    cole_nombre_sede = models.TextField(blank=True, null=True)
    cole_calendario = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_instituciones'


class DimLugares(models.Model):
    id_lugar = models.AutoField(primary_key=True)
    cole_area_ubicacion = models.TextField(blank=True, null=True)
    cole_mcpio_ubicacion = models.TextField(blank=True, null=True)
    estu_area_reside = models.TextField(blank=True, null=True)
    estu_mcpio_presentacion = models.TextField(blank=True, null=True)
    estu_reside_mcpio = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_lugares'


class DimPruCNat(models.Model):
    id_pru_c_nat = models.AutoField(primary_key=True)
    desemp_c_naturales = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_pru_c_nat'


class DimPruIngles(models.Model):
    id_pru_ingles = models.AutoField(primary_key=True)
    desemp_ingles = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_pru_ingles'


class DimPruLecCrit(models.Model):
    id_pru_lec_crit = models.AutoField(primary_key=True)
    desemp_lec_crit = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_pru_lec_crit'


class DimPruMat(models.Model):
    id_pru_mat = models.AutoField(primary_key=True)
    desemp_mat = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_pru_mat'


class DimPruSocCiu(models.Model):
    id_pru_soc_ciu = models.AutoField(primary_key=True)
    desemp_soc_ciu = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_pru_soc_ciu'


class DimTiempo(models.Model):
    id_tiempo = models.AutoField(primary_key=True)
    periodo = models.TextField(blank=True, null=True)
    ano = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dim_tiempo'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class FactSaber11(models.Model):
    id_estudiante = models.ForeignKey(DimEstudiantes, models.DO_NOTHING, db_column='id_estudiante', blank=True, null=True)
    id_institucion = models.ForeignKey(DimInstituciones, models.DO_NOTHING, db_column='id_institucion', blank=True, null=True)
    id_lugar = models.ForeignKey(DimLugares, models.DO_NOTHING, db_column='id_lugar', blank=True, null=True)
    id_pru_c_nat = models.ForeignKey(DimPruCNat, models.DO_NOTHING, db_column='id_pru_c_nat', blank=True, null=True)
    id_pru_ingles = models.ForeignKey(DimPruIngles, models.DO_NOTHING, db_column='id_pru_ingles', blank=True, null=True)
    id_pru_lec_crit = models.ForeignKey(DimPruLecCrit, models.DO_NOTHING, db_column='id_pru_lec_crit', blank=True, null=True)
    id_pru_mat = models.ForeignKey(DimPruMat, models.DO_NOTHING, db_column='id_pru_mat', blank=True, null=True)
    id_pru_soc_ciu = models.ForeignKey(DimPruSocCiu, models.DO_NOTHING, db_column='id_pru_soc_ciu', blank=True, null=True)
    id_tiempo = models.ForeignKey(DimTiempo, models.DO_NOTHING, db_column='id_tiempo', blank=True, null=True)
    punt_global = models.IntegerField(blank=True, null=True)
    prom_rend = models.IntegerField(blank=True, null=True)
    punt_c_nat = models.IntegerField(blank=True, null=True)
    punt_ingles = models.IntegerField(blank=True, null=True)
    punt_lec_crit = models.IntegerField(blank=True, null=True)
    punt_mat = models.IntegerField(blank=True, null=True)
    punt_soc_ciu = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fact_saber11'
