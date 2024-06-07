package com.GearTech.geartech.dto;

public class ResultadosEDRDTO {
    private Long id;
    private float circuloPrimitivo1;
    private float passo;
    private float folgaCabeca;
    private float alturaCabecaDente;
    private float alturaPeDente;
    private float alturaDente;
    private float circuloCabeca;
    private float circuloPe;
    private float distanciaEixos;
    private float circuloCabecaInterno;
    private float circuloPeInterno;
    private float circuloPrimitivo2;
    private float distanciaEixosInterno;
    private AlunoDTO aluno;

    private ProfessorDTO professor;


    // Construtores, getters e setters
    public ResultadosEDRDTO() {}

    public ResultadosEDRDTO(Long id, float circuloPrimitivo1, float passo, float folgaCabeca, float alturaCabecaDente,
                            float alturaPeDente, float alturaDente, float circuloCabeca, float circuloPe,
                            float distanciaEixos, float circuloCabecaInterno, float circuloPeInterno,
                            float circuloPrimitivo2, float distanciaEixosInterno, AlunoDTO aluno) {
        this.id = id;
        this.circuloPrimitivo1 = circuloPrimitivo1;
        this.passo = passo;
        this.folgaCabeca = folgaCabeca;
        this.alturaCabecaDente = alturaCabecaDente;
        this.alturaPeDente = alturaPeDente;
        this.alturaDente = alturaDente;
        this.circuloCabeca = circuloCabeca;
        this.circuloPe = circuloPe;
        this.distanciaEixos = distanciaEixos;
        this.circuloCabecaInterno = circuloCabecaInterno;
        this.circuloPeInterno = circuloPeInterno;
        this.circuloPrimitivo2 = circuloPrimitivo2;
        this.distanciaEixosInterno = distanciaEixosInterno;
        this.aluno = aluno;
    }

    public ResultadosEDRDTO(Long id, float circuloPrimitivo1, float passo, float folgaCabeca, float alturaCabecaDente, float alturaPeDente, float alturaDente, float circuloCabeca, float circuloPe, float distanciaEixos, float circuloCabecaInterno, float circuloPeInterno, float circuloPrimitivo2, float distanciaEixosInterno, ProfessorDTO professor) {
        this.id = id;
        this.circuloPrimitivo1 = circuloPrimitivo1;
        this.passo = passo;
        this.folgaCabeca = folgaCabeca;
        this.alturaCabecaDente = alturaCabecaDente;
        this.alturaPeDente = alturaPeDente;
        this.alturaDente = alturaDente;
        this.circuloCabeca = circuloCabeca;
        this.circuloPe = circuloPe;
        this.distanciaEixos = distanciaEixos;
        this.circuloCabecaInterno = circuloCabecaInterno;
        this.circuloPeInterno = circuloPeInterno;
        this.circuloPrimitivo2 = circuloPrimitivo2;
        this.distanciaEixosInterno = distanciaEixosInterno;
        this.professor = professor;
    }

    // Getters and setters for all fields
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getCirculoPrimitivo1() {
        return circuloPrimitivo1;
    }

    public void setCirculoPrimitivo1(float circuloPrimitivo1) {
        this.circuloPrimitivo1 = circuloPrimitivo1;
    }

    public float getPasso() {
        return passo;
    }

    public void setPasso(float passo) {
        this.passo = passo;
    }

    public float getFolgaCabeca() {
        return folgaCabeca;
    }

    public void setFolgaCabeca(float folgaCabeca) {
        this.folgaCabeca = folgaCabeca;
    }

    public float getAlturaCabecaDente() {
        return alturaCabecaDente;
    }

    public void setAlturaCabecaDente(float alturaCabecaDente) {
        this.alturaCabecaDente = alturaCabecaDente;
    }

    public float getAlturaPeDente() {
        return alturaPeDente;
    }

    public void setAlturaPeDente(float alturaPeDente) {
        this.alturaPeDente = alturaPeDente;
    }

    public float getAlturaDente() {
        return alturaDente;
    }

    public void setAlturaDente(float alturaDente) {
        this.alturaDente = alturaDente;
    }

    public float getCirculoCabeca() {
        return circuloCabeca;
    }

    public void setCirculoCabeca(float circuloCabeca) {
        this.circuloCabeca = circuloCabeca;
    }

    public float getCirculoPe() {
        return circuloPe;
    }

    public void setCirculoPe(float circuloPe) {
        this.circuloPe = circuloPe;
    }

    public float getDistanciaEixos() {
        return distanciaEixos;
    }

    public void setDistanciaEixos(float distanciaEixos) {
        this.distanciaEixos = distanciaEixos;
    }

    public float getCirculoCabecaInterno() {
        return circuloCabecaInterno;
    }

    public void setCirculoCabecaInterno(float circuloCabecaInterno) {
        this.circuloCabecaInterno = circuloCabecaInterno;
    }

    public float getCirculoPeInterno() {
        return circuloPeInterno;
    }

    public void setCirculoPeInterno(float circuloPeInterno) {
        this.circuloPeInterno = circuloPeInterno;
    }

    public float getCirculoPrimitivo2() {
        return circuloPrimitivo2;
    }

    public void setCirculoPrimitivo2(float circuloPrimitivo2) {
        this.circuloPrimitivo2 = circuloPrimitivo2;
    }

    public float getDistanciaEixosInterno() {
        return distanciaEixosInterno;
    }

    public void setDistanciaEixosInterno(float distanciaEixosInterno) {
        this.distanciaEixosInterno = distanciaEixosInterno;
    }

    public AlunoDTO getAluno() {
        return aluno;
    }

    public void setAluno(AlunoDTO aluno) {
        this.aluno = aluno;
    }

    public ProfessorDTO getProfessor() {
        return professor;
    }

    public void setProfessor(ProfessorDTO professor) {
        this.professor = professor;
    }
}

