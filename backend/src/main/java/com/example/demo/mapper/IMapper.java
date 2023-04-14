package com.example.demo.mapper;

import java.util.List;

public interface IMapper<Model, DTO> {
    Model ToModel(DTO dto);
    List<Model> ToModel(List<DTO> dto);
    DTO ToDTO(Model model);
    List<DTO> ToDTO(List<Model> model);
}
