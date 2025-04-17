package plots;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/v1/plots")
public class PlotController {

    PlotService plotService;

    public PlotController(PlotService plotService) {
        this.plotService = plotService;
    }

    @GetMapping("/sanity")
    public PlotDataDto<Integer, Integer> getSanity() {
        return plotService.getSanity();
    }

    @GetMapping("/accuracy")
    public PlotDataDto<Integer, Double> getAccuracy() {
        return plotService.getAccuracy();
    }

    @GetMapping("/reward")
    public PlotDataDto<Integer, Double> getReward() {
        return plotService.getReward();
    }

    @GetMapping("/whoasked")
    public PlotDataDto<Integer, Integer> getWhoAsked() {
        return plotService.getWhoAsked();
    }

}
