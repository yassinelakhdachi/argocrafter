package com.ensias.springdatarest.modele;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor



public class Proprietaire {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @NonNull
    private String nom;
    @NonNull
    private String prenom;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="proprietaire")
    @JsonIgnore
    private List<Voiture> voitures;


}