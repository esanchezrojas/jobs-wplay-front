export class RegistroExperiencia{

    private vacantehvexper_id?: number | undefined;
    public getvacantehvexper_id(): number | undefined {
        return this.vacantehvexper_id;
    }
    public setvacantehvexper_id(value: number | undefined) {
        this.vacantehvexper_id = value;
    }

   private vacantehv_id?: string | undefined;
    public getvacantehv_id(): string | undefined {
        return this.vacantehv_id;
    }
    public setvacantehv_id(value: string | undefined) {
        this.vacantehv_id = value;
    }

    private empresa?: string | undefined;
    public getempresa(): string | undefined {
        return this.empresa;
    }
    public setempresa(value: string | undefined) {
        this.empresa = value;
    }

    private cargo?: string | undefined;
    public getcargo(): string | undefined {
        return this.cargo;
    }
    public setcargo(value: string | undefined) {
        this.cargo = value;
    }

    private ciudad?: string | undefined;
    public getciudad(): string | undefined {
        return this.ciudad;
    }
    public setciudad(value: string | undefined) {
        this.ciudad = value;
    }

    private descripcion?: string | undefined;
    public getdescripcion(): string | undefined {
        return this.descripcion;
    }
    public setdescripcion(value: string | undefined) {
        this.descripcion = value;
    }

    private anio_ini?: string | undefined;
    public getanio_ini(): string | undefined {
        return this.anio_ini;
    }
    public setanio_ini(value: string | undefined) {
        this.anio_ini = value;
    }

    
    private anio_fin?: string | undefined;
    public getanio_fin(): string | undefined {
        return this.anio_fin;
    }
    public setanio_fin(value: string | undefined) {
        this.anio_fin = value;
    }

    
    private mes_ini?: number | undefined;
    public getmes_ini(): number | undefined {
        return this.mes_ini;
    }
    public setmes_ini(value: number | undefined) {
        this.mes_ini = value;
    }
   

    private mes_fin?: number | undefined;
    public getmes_fin(): number | undefined {
        return this.mes_fin;
    }
    public setmes_fin(value: number | undefined) {
        this.mes_fin = value;
    }

    
   }