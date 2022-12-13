import * as React from "react";
import { View, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Link } from "../../components/react-router-app";
import { content as styles } from "../../styles/loginView.styles";
import globalStyle from '../../styles/app.style';

export default function Content () {
    const [step, setStep] = React.useState(0);
    const email = React.useRef(null);
    const password = React.useRef(null);

    const Step = steps[step];
    const ref = [email, password][step];

    React.useEffect(() => {
        console.log(email, password);
    })

    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <Step
                    ref={ref}
                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <Button 
                    style={styles.button}
                    mode="outlined"
                    onPress={() => null}
                    disabled={!step}
                >Précédent</Button>
                <Button
                    tyle={styles.button}
                    mode="contained"
                    onPress={() => null}
                >Suivant</Button>
            </View>
        </View>
    );
}

const EmailValidate = React.forwardRef((props, ref) => {
    const [value, setValue] = React.useState('');

    React.useLayoutEffect(() => {
        ref.current = value;
    }, [value]);

    

    return ( 
        <React.Fragment>
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
        </React.Fragment>
    );
});

const PasswordValidate = React.forwardRef(() => {

    return (
        <Text> Password validate </Text>
    );
});

const steps = [EmailValidate, PasswordValidate] ;
