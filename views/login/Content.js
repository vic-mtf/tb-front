import * as React from "react";
import { View, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Link } from "../../components/react-router-app";
import { content as styles } from "../../styles/loginView.styles";
import globalStyle from '../../styles/app.style';

export default function Content ({
    handleStep,
    handleCheckEmail,
    handleLogin,
    identifyRef, 
    loading, 
    step,
}) {
   
    const Step = steps[step];

    React.useEffect(() => {
        console.log(identifyRef);
    })

    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.stepContainer}>
                    <Step
                        identifyRef={identifyRef}
                    />
                </View>
                <View
                    style={styles.buttonContainer}
                >
                    <Button 
                        style={styles.button}
                        mode="outlined"
                        onPress={() => handleStep('PREVIOUS')}
                        disabled={!step}
                    >Précédent</Button>
                    <Button
                        tyle={styles.button}
                        mode="contained"
                        onPress={() => handleStep()}
                        disabled={loading}
                    >Suivant</Button>
                </View>
            </View>
        </React.Fragment>
    );
}

const EmailValidate = ({identifyRef}) => {
    const [value, setValue] = React.useState('');

    React.useLayoutEffect(() => {
        identifyRef.current.email = value;
    }, [value]);

    

    return ( 
        <View style={styles.emailContente}>
            <TextInput
                label="Email"
                placeholder="exemple@email.cd"
                value={value}
                onChangeText={text => setValue(text)}
                placeholderTextColor="gray"
                left={
                <TextInput.Icon 
                    disabled
                    icon={({ size, color }) => (
                        <Image
                            source={require('../../icons/icons8-message-100.png')}
                            style={{ width: size, height: size }}
                        />
                    )}
                />
                }
            />
            <View style={styles.emailcontainerView}>
                <Text style={styles.emailcontainerText}>Pas de compte?</Text>
                <Link style={globalStyle.link}>
                    <Text 
                        style={[styles.emailcontainerText, globalStyle.link]}
                    >Créez-en un!</Text>
                </Link>
            </View>
        </View>
    );
};

const PasswordValidate = () => {

    return (
        <Text> Password validate </Text>
    );
};

const steps = [EmailValidate, PasswordValidate] ;
