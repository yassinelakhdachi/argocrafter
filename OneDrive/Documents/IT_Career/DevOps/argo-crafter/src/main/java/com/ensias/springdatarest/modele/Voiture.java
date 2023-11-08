package com.ensias.springdatarest.modele;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class Voiture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NonNull
    private String marque;

    @NonNull
    private String modele;

    @NonNull
    private String couleur;

    @NonNull
    private String immatricule;

    @NonNull
    private int annee;

    @NonNull
    private int prix;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "proprietaire")
    @NonNull
    @JsonIgnore

    private Proprietaire proprietaire;
}