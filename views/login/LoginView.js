import * as React from 'react';
import { View } from 'react-native';
import { ProgressBar, Surface } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-native';
import { loginView as styles } from '../../styles/loginView.styles';
import { useAxios } from '../../utils/axiosConfig';
import Content from './Content';
import Header from './Header';

export default function LoginView () {
    const [{loading, error}, refresh] = useAxios({
        url: '/signin',
        method: 'post',
    }, { manual: true });
    const identifyRef = React.useRef({});
    const [step, setStep] = React.useState(0);
    const dispatch = useDispatch();
    const navidateTo = useNavigate();

    const handleStep = React.useCallback((direction = 'NEXT') => {
        if(direction === 'NEXT')
            setStep(Math.max(step + 1, 0));
        if(direction === 'PREVIOUS')
            setStep(Math.max(step - 1, 0));
    }, [step]);

    const handleCheckEmail = () => {
        const { email } = identifyRef.current;
        refresh({ data: { email } })
        .then(() => {
            handleStep();
        });
    }

    const handleLogin = () => {
        const data = identifyRef.current;
        refresh({ data }).then(() => {
            dispatch();
            navidateTo();
        });
    };

    return (
        <View style={styles.container}>
            <Surface>
                <ProgressBar indeterminate visible={loading}/>
                <View style={styles.surface}>
                    <Header/>
                    <Content
                        step={step}
                        identifyRef={identifyRef}
                        handleStep={handleStep}
                        handleCheckEmail={handleCheckEmail}
                        handleLogin={handleLogin}
                    />
                </View>
            </Surface>
        </View>
    )
};