import { LinearGradient } from "expo-linear-gradient";

export const Gradient = () => {
    return (
        <LinearGradient
            colors={['transparent', '#1A1C29', '#1A1C29', '#1A1C29']}
            style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                top: 0,
                zIndex: -1,
            }}
        />
    )
}