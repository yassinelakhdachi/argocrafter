package com.ensias.springdatarest.modele;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface VoitureRepo extends CrudRepository<Voiture, Long> {
    // Sélectionnez les voitures par marque
    List<Voiture> findByMarque(String marque);

    // Sélectionnez les voitures par couleur

    // Sélectionnez les voitures par année
    List<Voiture> findByAnnee(int annee);

    // Sélectionnez les voitures par marque et modele
    List<Voiture> findByMarqueAndModele(String marque, String modele);

    // Sélectionnez les voitures par marque ou couleur
    List<Voiture> findByMarqueOrCouleur(String marque, String couleur);

    // Sélectionnez les voitures par marque et triez par année (ascendant)
    List<Voiture> findByMarqueOrderByAnneeAsc(String marque);
    List<Voiture> findByModele(@Param("modele") String modele);

    List<Voiture> findByCouleur(@Param("couleur") String couleur);

    // Sélectionnez les voitures par marque en utilisant SQL
    @Query("select v from Voiture v where v.marque = ?1")
    List<Voiture> findByMarqueSql(String marque);

    // Sélectionnez les voitures par marque qui se termine par une chaîne donnée
    @Query("select v from Voiture v where v.marque like %?1")
    List<Voiture> findByMarqueEndsWith(String marque);
}
