/*
  Funcion que calcula el dano que puede hacer un pokemon
*/
export function efective_Pokemon(mi_tipo, tipo_oponente, mi_ataque, defensa_oponente) {
    const super_efectivo = 50 * (mi_ataque / defensa_oponente) * 2;
    const normal = 50 * (mi_ataque / defensa_oponente);
    const poco_efectivo = 50 * (mi_ataque / defensa_oponente) * 0.5;
    if (mi_tipo === 'fuego') {
        if (tipo_oponente === 'fuego') {
            return poco_efectivo;
        }
        if (tipo_oponente === 'hierba') {
            return super_efectivo;
        }
        if (tipo_oponente === 'agua') {
            return poco_efectivo;
        }
        if (tipo_oponente === 'electrico') {
            return normal;
        }
    }
    if (mi_tipo === 'agua') {
        if (tipo_oponente === 'agua') {
            return poco_efectivo;
        }
        if (tipo_oponente === 'fuego') {
            return super_efectivo;
        }
        if (tipo_oponente === 'hierba') {
            return poco_efectivo;
        }
        if (tipo_oponente === 'electrico') {
            return normal;
        }
    }
    if (mi_tipo === 'hierba') {
        if (tipo_oponente === 'hierba') {
            return poco_efectivo;
        }
        if (tipo_oponente === 'fuego') {
            return poco_efectivo;
        }
        if (tipo_oponente === 'agua') {
            return super_efectivo;
        }
        if (tipo_oponente === 'electrico') {
            return normal;
        }
    }
    if (mi_tipo === 'electrico') {
        if (tipo_oponente === 'electrico') {
            return poco_efectivo;
        }
        if (tipo_oponente === 'fuego') {
            return normal;
        }
        if (tipo_oponente === 'agua') {
            return super_efectivo;
        }
        if (tipo_oponente === 'hierba') {
            return normal;
        }
    }
}
console.log(efective_Pokemon('fuego', 'fuego', 100, 100));
console.log(efective_Pokemon('agua', 'fuego', 100, 100));
