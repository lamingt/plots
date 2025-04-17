package plots;

import java.util.List;

public class PlotDataDto<xType, yType> {
    List<xType> xData;
    List<yType> yData;

    public PlotDataDto(List<xType> xData, List<yType> yData) {
        this.xData = xData;
        this.yData = yData;
    }

    public List<xType> getxData() {
        return xData;
    }

    public List<yType> getyData() {
        return yData;
    }

}
