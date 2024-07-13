package com.event.backend.Entity.PrivateEventBooking;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PrivateMedia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mediaId;
    private String serviceProviderName;
    private double price;
    @ManyToOne
    @JoinColumn(name = "venue_id")
    private PrivateVenue venue;
}
