

export enum TargetWeeklyDeltas{
    ZeroLbsWeek = 0,
    OneLbWeek = 1,
    MinusLbWeek = 2
}

export class Calculator{
    GetLastWeeksDailyCalories() : number[]{
        //TODO:
        return [];
    }

    
    GetLastWeeksDailyWeights() : number[]{
        //TODO:
        return [];
    }

    

    GetTargetWeeklyWeightDelta() : TargetWeeklyDeltas{
        //TODO:
        return TargetWeeklyDeltas.ZeroLbsWeek;
    }

    average(values: number[]) :number{
        let sum = values.reduce((previous, current) => current += previous);
        let avg = sum / values.length;

        return avg;
    }

    

    calculateDeltas(values: number[]) :number[]{
        let deltas :number[] = [];
        
        for (let i = 1; i < values.length; i++){
            let v1 = values[i - 1];
            let v2 = values[i];

            deltas.push(v2 - v1);
        }

        return deltas;
    }

    GetTargetDailyCalories() : number{                
        let avgDailyCalories = this.average(this.GetLastWeeksDailyCalories());
        
        let weights = this.GetLastWeeksDailyWeights();
        
        let avgDailyWeightDelta = this.average(this.calculateDeltas(weights));

        let targeWeeklyDelta = this.GetTargetWeeklyWeightDelta();

        let calsInPound = 3500;
        let daysInWeek = 7;

        let goalCalories = avgDailyCalories;
        let maxDailyCalorieChange = 100;

        let targetDailyDelta = 0;

        switch (targeWeeklyDelta){            
            case TargetWeeklyDeltas.OneLbWeek:
                targetDailyDelta = calsInPound / daysInWeek;
                break;
            case TargetWeeklyDeltas.MinusLbWeek:
                targetDailyDelta = -calsInPound / daysInWeek;
                break;
        }
        
        if (targetDailyDelta > avgDailyWeightDelta){
            goalCalories -= maxDailyCalorieChange;
        }else if (targetDailyDelta < avgDailyWeightDelta){
            goalCalories += maxDailyCalorieChange;
        }

        return goalCalories;

    }


}