namespace Ultrasonico {
    //% block  
    export function Distancia(): number {
        // send pulse
        pins.digitalWritePin(DigitalPin.P0, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P0, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P0, 0);

        // Medir el pulso
        let duration = pins.pulseIn(DigitalPin.P1, PulseValue.High);

        // Verificar si la duración es válida
        if (duration == 0) {
            return -1; // Retornar un valor de error si no se recibe eco
        }

        let d = duration / 58;
        return d;
    }
}
