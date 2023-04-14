package com.example.demo.mapper;

import com.example.demo.DTO.AccidentHistoryDTO;
import com.example.demo.DTO.DriverDTO;
import com.example.demo.model.AccidentHistory;
import com.example.demo.util.DateFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static com.example.demo.util.DateFormatter.dateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
@Component
public class AccidentHistoryMapper implements IMapper<AccidentHistory, AccidentHistoryDTO> {
    @Autowired
    private DriverMapper driverMapper;
    @Override
    public AccidentHistory ToModel(AccidentHistoryDTO accidentHistoryDTO) {
        AccidentHistory accidentHistory = new AccidentHistory();
        if(accidentHistoryDTO.id != null)accidentHistory.setId(accidentHistoryDTO.id);
        accidentHistory.setWasResponsible(accidentHistoryDTO.wasResponsible);
        accidentHistory.setDescription(accidentHistoryDTO.description);
        accidentHistory.setTimeHappened(DateFormatter.convertStringToLocalDateTime(accidentHistoryDTO.timeHappened));
        DriverDTO driverDTO = new DriverDTO();
        driverDTO.id = accidentHistoryDTO.driverId;
        accidentHistory.setDriver(driverMapper.ToModel(driverDTO));
        accidentHistory.setIsDeleted(false);
        return accidentHistory;
    }

    @Override
    public List<AccidentHistory> ToModel(List<AccidentHistoryDTO> dto) {
        List<AccidentHistory> accidentHistories = new ArrayList<>();
        for(AccidentHistoryDTO accidentHistoryDTO : dto){
            accidentHistories.add(ToModel(accidentHistoryDTO));
        }
        return accidentHistories;
    }

    @Override
    public AccidentHistoryDTO ToDTO(AccidentHistory accidentHistory) {
        AccidentHistoryDTO accidentHistoryDTO = new AccidentHistoryDTO();
        accidentHistoryDTO.id = accidentHistory.getId();
        accidentHistoryDTO.timeHappened = accidentHistory.getTimeHappened().format(dateTimeFormatter);
        accidentHistoryDTO.wasResponsible = accidentHistory.getWasResponsible();
        accidentHistoryDTO.description = accidentHistory.getDescription();
        accidentHistoryDTO.driverId = accidentHistory.getDriver().getId();
        accidentHistoryDTO.driversName = accidentHistory.getDriver().getFirstName();
        accidentHistoryDTO.driversSurname = accidentHistory.getDriver().getLastName();
        accidentHistoryDTO.driversJMBG = accidentHistory.getDriver().getJmbg();
        return accidentHistoryDTO;
    }

    @Override
    public List<AccidentHistoryDTO> ToDTO(List<AccidentHistory> model) {
        List<AccidentHistoryDTO> accidentHistories = new ArrayList<>();
        for(AccidentHistory accidentHistory : model){
            accidentHistories.add(ToDTO(accidentHistory));
        }
        return accidentHistories;
    }
}
