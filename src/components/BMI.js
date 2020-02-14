import React, { useState } from 'react';

import BmiCalculator from './BmiCalculator';

const BMI = () => {
    const [bmiValue, setBmiValue] = useState(0);

    const getBmiClass = bmi => {
        if (bmi >= 1 && bmi <= 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight';
        if (bmi >= 24.9 && bmi <= 29.9) return 'Overweight';
        if (bmi >= 30) return 'Obese';
    }

    const bmiBackgroundColor = bmi => {
        if (bmi >= 1 && bmi <= 18.5) return '#FED88B';
        if (bmi >= 18.5 && bmi <= 24.9) return '#80ff80';
        if (bmi >= 24.9 && bmi <= 29.9) return '#FF7F50';
        if (bmi >= 30) return '#FF5411';
    }

    const bmiCategory = getBmiClass(bmiValue);
    let bmiClass = '';
    if (bmiValue > 0 && bmiCategory) {
        bmiClass = bmiCategory.split(' ')[0].toLowerCase();
    }

    return (
        <>
            <div className="calculator"
                style={{ backgroundColor: bmiBackgroundColor(bmiValue) }}
            >
                <h3>Body Mass Index Calculator</h3>
                <div className="bmi-result-container">
                    <div className="bmi-result">
                        <div className="bmi-result-number">
                            Body Mass Index (BMI) = {bmiValue}
                        </div>
                        <div className={`bmi-category ${bmiClass}`}>
                            {bmiCategory}
                        </div>
                    </div>
                </div>

                <BmiCalculator  getBmiValue={setBmiValue} />
            </div>
        </>
    )
}

export default BMI;
