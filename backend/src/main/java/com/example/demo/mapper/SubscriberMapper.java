package com.example.demo.mapper;

import com.example.demo.DTO.SubscriberDTO;
import com.example.demo.model.Subscriber;
import com.example.demo.model.enums.Gender;
import com.example.demo.model.enums.MartialStatus;
import com.example.demo.util.DateFormatter;
import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.List;

import static com.example.demo.util.DateFormatter.dateFormatter;

@Component
public class SubscriberMapper implements IMapper<Subscriber, SubscriberDTO> {

    @Override
    public Subscriber ToModel(SubscriberDTO subscriberDTO) {
        Subscriber subscriber = new Subscriber();

        if(subscriberDTO.id != 0)subscriber.setId(subscriberDTO.id);
        subscriber.setFirstName(subscriberDTO.name);
        subscriber.setLastName(subscriberDTO.surname);
        subscriber.setJmbg(subscriberDTO.jmbg);
        subscriber.setBirth(DateFormatter.convertStringToLocalDate(subscriberDTO.birth));
        subscriber.setGender(Gender.valueOf(subscriberDTO.gender));
        subscriber.setMartialStatus(MartialStatus.valueOf(subscriberDTO.materialStatus));

        return subscriber;
    }

    @Override
    public List<Subscriber> ToModel(List<SubscriberDTO> dto) {
        return null;
    }

    @Override
    public SubscriberDTO ToDTO(Subscriber subscriber) {
        SubscriberDTO dto = new SubscriberDTO();

        dto.id = subscriber.getId();
        dto.jmbg = subscriber.getJmbg();
        dto.name = subscriber.getFirstName();
        dto.surname = subscriber.getLastName();
        dto.birth = subscriber.getBirth().format(dateFormatter);
        dto.gender = subscriber.getGender().name();
        dto.materialStatus = subscriber.getMartialStatus().name();

        return dto;
    }

    @Override
    public List<SubscriberDTO> ToDTO(List<Subscriber> model) {
        List<SubscriberDTO> subs = new ArrayList<SubscriberDTO>();

        for(Subscriber subscriber : model){
            subs.add(ToDTO(subscriber));
        }

        return subs;
    }
}
