package plots;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class PlotService {
    public PlotDataDto<Integer, Integer> getSanity() {
        List<Integer> xData = new ArrayList<>();
        List<Integer> yData = new ArrayList<>();

        Random rand = new Random();
        for (int i = 0; i < 24; i++) {
            yData.add(rand.nextInt(11));
            xData.add(i + 1);
        }

        return new PlotDataDto<>(xData, yData);
    }

    public PlotDataDto<Integer, Double> getAccuracy() {
        List<Integer> xData = new ArrayList<>();
        List<Double> yData = new ArrayList<>();

        int totalEpochs = 200;
        double currentAccuracy = 50.0;
        Random rand = new Random();

        for (int epoch = 1; epoch <= totalEpochs; epoch++) {
            currentAccuracy = 9 * Math.log(epoch) + 50 + rand.nextDouble(0, 2) - rand.nextDouble(0, 2);

            xData.add(epoch);
            yData.add(currentAccuracy);
        }

        return new PlotDataDto<>(xData, yData);
    }

    public PlotDataDto<Integer, Double> getReward() {
        List<Integer> xData = new ArrayList<>();
        List<Double> yData = new ArrayList<>();

        int totalEpisodes = 2000;
        double currentReward = -500;
        Random rand = new Random();

        for (int episode = 1; episode < totalEpisodes; episode++) {
            if (episode < 100) {
                currentReward += Math.exp(rand.nextDouble(1, 3));
            } else {
                double reward = (totalEpisodes - episode) / 100;
                currentReward += rand.nextDouble(Math.max(0.2, reward - 0.9));
                currentReward -= rand.nextDouble(Math.max(0.1, reward - 1));
            }
            xData.add(episode);
            yData.add(currentReward);
        }

        return new PlotDataDto<>(xData, yData);
    }

    public PlotDataDto<Integer, Integer> getWhoAsked() {
        List<Integer> xData = new ArrayList<>();
        List<Integer> yData = new ArrayList<>();

        xData.add(0);
        yData.add(1000);

        return new PlotDataDto<>(xData, yData);
    }
}
