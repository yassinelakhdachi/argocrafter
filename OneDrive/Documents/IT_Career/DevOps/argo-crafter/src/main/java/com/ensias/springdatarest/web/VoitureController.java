package com.ensias.springdatarest.web;

import com.ensias.springdatarest.modele.Voiture;
import com.ensias.springdatarest.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VoitureController {
    @Autowired
    private VoitureRepo voitureRepo;

    @GetMapping("/voitures")
    public Iterable<Voiture> getVoitures() {
        return voitureRepo.findAll();
    }
    @GetMapping("/voitures/{id}")
    public ResponseEntity<Voiture> getVoitureById(@PathVariable Long id) {
        return voitureRepo.findById(id)
                .map(voiture -> ResponseEntity.ok().body(voiture))
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping("/voitures")
    public Voiture addVoiture(@RequestBody Voiture voiture) {
        return voitureRepo.save(voiture);
    }

    @DeleteMapping("/voitures/{id}")
    public void deleteVoiture(@PathVariable Long id) {
        voitureRepo.deleteById(id);
    }
    @PutMapping("/voitures/{id}")
    public Voiture updateVoiture(@PathVariable Long id, @RequestBody Voiture updatedVoiture) {
        Voiture existingVoiture = voitureRepo.findById(id).orElse(null);

        if (existingVoiture != null) {
            // Mettre à jour les propriétés spécifiques de la voiture ici
            // Par exemple : existingVoiture.setMarque(updatedVoiture.getMarque());
            // Ajoutez des lignes similaires pour chaque propriété à mettre à jour
            existingVoiture.setMarque(updatedVoiture.getMarque());
            existingVoiture.setModele(updatedVoiture.getModele());
            existingVoiture.setCouleur(updatedVoiture.getCouleur());
            existingVoiture.setImmatricule(updatedVoiture.getImmatricule());
            existingVoiture.setAnnee(updatedVoiture.getAnnee());
            existingVoiture.setPrix(updatedVoiture.getPrix());

            return voitureRepo.save(existingVoiture);
        } else {
            return null; // Gérez le cas où la voiture avec l'ID donné n'existe pas
        }
    }

}
