import { StyleSheet } from "react-native"

const styles = {
    loginView: StyleSheet.create({
        container: {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        surface: {
            padding: 30,
            minHeight: 300,
            width: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
    }),

    content: StyleSheet.create({
        container: {
            flex: 1,
            width: '100%'
        },
        stepContainer: {
            flex: 1,
        },
        buttonContainer: {
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'right',
        },
        button: {
            marginLeft: 5,
            marginRight: 5,
        },
        emailcontainerView: {
            flexDirection: 'row',
            marginTop: 10,
        },
        emailcontainerText: {
            marginEnd: 10,
        },
    }),
    header: StyleSheet.create({
        container: {
            //flex: 1,
            width: '100%',
        },
        subTitle: {
            marginBottom: 10,
        }
    }),
};

export const { loginView, content, header } = styles;
export default styles;