package com.GearTech.geartech.entity;

import java.util.Objects;

import jakarta.persistence.*;

@Entity
@Table(name = "resultado_engrenagem_dentes_helicoidas")
public class ResultadosEDH {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	public float circuloPrimitivo1;
	public float circuloPrimitivo2;
	public float moduloNormal;
	public float passoNormal;
	public float passoHelicoidal;
	public float distanciaEntreEixos;

	@ManyToOne
	@JoinColumn(nullable = true)
	private Aluno aluno;

	@ManyToOne
	@JoinColumn(nullable = true)
	private Professor professor;

	public ResultadosEDH() {
	}

	public ResultadosEDH(Long id, float circuloPrimitivo1, float circuloPrimitivo2, float moduloNormal, float passoNormal, float passoHelicoidal, float distanciaEntreEixos, Aluno aluno, Professor professor) {
		this.id = id;
		this.circuloPrimitivo1 = circuloPrimitivo1;
		this.circuloPrimitivo2 = circuloPrimitivo2;
		this.moduloNormal = moduloNormal;
		this.passoNormal = passoNormal;
		this.passoHelicoidal = passoHelicoidal;
		this.distanciaEntreEixos = distanciaEntreEixos;
		this.aluno = aluno;
		this.professor = professor;
	}

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

	public float getCirculoPrimitivo2() {
		return circuloPrimitivo2;
	}

	public void setCirculoPrimitivo2(float circuloPrimitivo2) {
		this.circuloPrimitivo2 = circuloPrimitivo2;
	}

	public float getModuloNormal() {
		return moduloNormal;
	}

	public void setModuloNormal(float moduloNormal) {
		this.moduloNormal = moduloNormal;
	}

	public float getPassoNormal() {
		return passoNormal;
	}

	public void setPassoNormal(float passoNormal) {
		this.passoNormal = passoNormal;
	}

	public float getPassoHelicoidal() {
		return passoHelicoidal;
	}

	public void setPassoHelicoidal(float passoHelicoidal) {
		this.passoHelicoidal = passoHelicoidal;
	}

	public float getDistanciaEntreEixos() {
		return distanciaEntreEixos;
	}

	public void setDistanciaEntreEixos(float distanciaEntreEixos) {
		this.distanciaEntreEixos = distanciaEntreEixos;
	}

	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}

	public Professor getProfessor() {
		return professor;
	}

	public void setProfessor(Professor professor) {
		this.professor = professor;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		ResultadosEDH that = (ResultadosEDH) o;
		return Float.compare(circuloPrimitivo1, that.circuloPrimitivo1) == 0 && Float.compare(circuloPrimitivo2, that.circuloPrimitivo2) == 0 && Float.compare(moduloNormal, that.moduloNormal) == 0 && Float.compare(passoNormal, that.passoNormal) == 0 && Float.compare(passoHelicoidal, that.passoHelicoidal) == 0 && Float.compare(distanciaEntreEixos, that.distanciaEntreEixos) == 0 && Objects.equals(id, that.id) && Objects.equals(aluno, that.aluno) && Objects.equals(professor, that.professor);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, circuloPrimitivo1, circuloPrimitivo2, moduloNormal, passoNormal, passoHelicoidal, distanciaEntreEixos, aluno, professor);
	}

	@Override
	public String toString() {
		return "ResultadosEDH{" +
				"id=" + id +
				", circuloPrimitivo1=" + circuloPrimitivo1 +
				", circuloPrimitivo2=" + circuloPrimitivo2 +
				", moduloNormal=" + moduloNormal +
				", passoNormal=" + passoNormal +
				", passoHelicoidal=" + passoHelicoidal +
				", distanciaEntreEixos=" + distanciaEntreEixos +
				", aluno=" + (aluno != null ? aluno.getNome() : "null") +
				", professor=" + (professor != null ? professor.getNome() : "null") +
				'}';
	}
}
