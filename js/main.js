/* DEFINICION DE CLASES *******************************************************/
class RelojJuego {
    constructor() {
        this.relojes_front = [[0,0,0],
                              [0,0,0],
                              [0,0,0]]
        this.relojes_back = [[0,0,0],
                             [0,0,0],
                             [0,0,0]]
        this.relojes_front_on = [[true,true,true],
                                 [true,true,true],
                                 [true,true,true]]
        this.relojes_back_on = [[false,false,false],
                                [false,false,false],
                                [false,false,false]]
        this.pivotes_front = [true,true,true,true]
    }

    reiniciar() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.relojes_front[i][j] = 0
                this.relojes_back[i][j] = 0
                this.relojes_front_on[i][j] = true
                this.relojes_back_on[i][j] = false
            }
        }
        for (let i = 0; i < 4; i++)
            this.pivotes_front[i] = true
        console.table([[this.pivotes_front[0],this.pivotes_front[1]],[this.pivotes_front[2],this.pivotes_front[3]]])
        console.table([this.relojes_front_on[0].concat(this.relojes_back_on[0]),this.relojes_front_on[1].concat(this.relojes_back_on[1]),this.relojes_front_on[2].concat(this.relojes_back_on[2])])
        console.table([this.relojes_front[0].concat(this.relojes_back[0]),this.relojes_front[1].concat(this.relojes_back[1]),this.relojes_front[2].concat(this.relojes_back[2])])
    }

    _set_relojes_front_on(i) {
        if (i == 0) {
            this.relojes_front_on[0][0] = true
            this.relojes_front_on[0][1] = true
            this.relojes_front_on[1][0] = true
            this.relojes_front_on[1][1] = true
            this.relojes_back_on[0][2] = false
            this.relojes_back_on[0][1] = !this.pivotes_front[1]
            this.relojes_back_on[1][2] = !this.pivotes_front[2]
            this.relojes_back_on[1][1] = !(this.pivotes_front[1] && this.pivotes_front[2] && this.pivotes_front[3])
        } else if (i == 1) {
            this.relojes_front_on[0][1] = true
            this.relojes_front_on[0][2] = true
            this.relojes_front_on[1][1] = true
            this.relojes_front_on[1][2] = true
            this.relojes_back_on[0][1] = !this.pivotes_front[0]
            this.relojes_back_on[0][0] = false
            this.relojes_back_on[1][1] = !(this.pivotes_front[0] && this.pivotes_front[2] && this.pivotes_front[3])
            this.relojes_back_on[1][0] = !this.pivotes_front[3]
        } else if (i == 2) {
            this.relojes_front_on[1][0] = true
            this.relojes_front_on[1][1] = true
            this.relojes_front_on[2][0] = true
            this.relojes_front_on[2][1] = true
            this.relojes_back_on[1][2] = !this.pivotes_front[0]
            this.relojes_back_on[1][1] = !(this.pivotes_front[0] && this.pivotes_front[1] && this.pivotes_front[3])
            this.relojes_back_on[2][2] = false
            this.relojes_back_on[2][1] = !this.pivotes_front[3]
        } else if (i == 3) {
            this.relojes_front_on[1][1] = true
            this.relojes_front_on[1][2] = true
            this.relojes_front_on[2][1] = true
            this.relojes_front_on[2][2] = true
            this.relojes_back_on[1][1] = !(this.pivotes_front[0] && this.pivotes_front[1] && this.pivotes_front[2])
            this.relojes_back_on[1][0] = !this.pivotes_front[1]
            this.relojes_back_on[2][1] = !this.pivotes_front[2]
            this.relojes_back_on[2][0] = false
        }
        console.table([this.relojes_front_on[0].concat(this.relojes_back_on[0]),this.relojes_front_on[1].concat(this.relojes_back_on[1]),this.relojes_front_on[2].concat(this.relojes_back_on[2])])
    }

    _set_relojes_front_off(i) {
        let algun_pivot_on

        if (i == 0) {
            this.relojes_front_on[0][0] = false
            this.relojes_front_on[0][1] = this.pivotes_front[1]
            this.relojes_front_on[1][0] = this.pivotes_front[2]
            algun_pivot_on = this.pivotes_front[1] || this.pivotes_front[2] || this.pivotes_front[3]
            this.relojes_front_on[1][1] = algun_pivot_on
            this.relojes_back_on[0][1] = true
            this.relojes_back_on[0][2] = true
            this.relojes_back_on[1][1] = true
            this.relojes_back_on[1][2] = true
        } else if (i == 1) {
            this.relojes_front_on[0][1] = this.pivotes_front[0]
            this.relojes_front_on[0][2] = false
            algun_pivot_on = this.pivotes_front[0] || this.pivotes_front[2] || this.pivotes_front[3]
            this.relojes_front_on[1][1] = algun_pivot_on
            this.relojes_front_on[1][2] = this.pivotes_front[3]
            this.relojes_back_on[0][0] = true
            this.relojes_back_on[0][1] = true
            this.relojes_back_on[1][0] = true
            this.relojes_back_on[1][1] = true
        } else if (i == 2) {
            this.relojes_front_on[1][0] = this.pivotes_front[0]
            algun_pivot_on = this.pivotes_front[0] || this.pivotes_front[1] || this.pivotes_front[3]
            this.relojes_front_on[1][1] = algun_pivot_on
            this.relojes_front_on[2][0] = false
            this.relojes_front_on[2][1] = this.pivotes_front[3]
            this.relojes_back_on[1][1] = true
            this.relojes_back_on[1][2] = true
            this.relojes_back_on[2][1] = true
            this.relojes_back_on[2][2] = true
        } else if (i == 3) {
            algun_pivot_on = this.pivotes_front[0] || this.pivotes_front[1] || this.pivotes_front[2]
            this.relojes_front_on[1][1] = algun_pivot_on
            this.relojes_front_on[1][2] = this.pivotes_front[1]
            this.relojes_front_on[2][1] = this.pivotes_front[2]
            this.relojes_front_on[2][2] = false
            this.relojes_back_on[1][0] = true
            this.relojes_back_on[1][1] = true
            this.relojes_back_on[2][0] = true
            this.relojes_back_on[2][1] = true
        }
        console.table([this.relojes_front_on[0].concat(this.relojes_back_on[0]),this.relojes_front_on[1].concat(this.relojes_back_on[1]),this.relojes_front_on[2].concat(this.relojes_back_on[2])])
    }

    set_pivot_front(i) {
        let estado = !this.pivotes_front[i]

        this.pivotes_front[i] = estado
        console.table([[this.pivotes_front[0],this.pivotes_front[1]],[this.pivotes_front[2],this.pivotes_front[3]]])
        if (estado) {
            this._set_relojes_front_on(i)
        }
        else {
            this._set_relojes_front_off(i)
        }
    }

    adelantar_relojes_front(i) {
        let l

        if (this.pivotes_front[i]) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (this.relojes_front_on[j][k]) {
                        l = this.relojes_front[j][k]
                        this.relojes_front[j][k] = (l+1) % 12
                    }
                }
            }
            // REFLEJAR EN EL RELOJ BACK
            this.relojes_back[0][0] = (12 - this.relojes_front[0][2]) % 12
            this.relojes_back[0][2] = (12 - this.relojes_front[0][0]) % 12
            this.relojes_back[2][0] = (12 - this.relojes_front[2][2]) % 12
            this.relojes_back[2][2] = (12 - this.relojes_front[2][0]) % 12
        }
        else {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (this.relojes_back_on[j][k]) {
                        l = this.relojes_back[j][k]
                        this.relojes_back[j][k] = (l+11) % 12
                    }
                }
            }
            // REFLEJAR EN EL RELOJ FRONT
            this.relojes_front[0][0] = (12 - this.relojes_back[0][2]) % 12
            this.relojes_front[0][2] = (12 - this.relojes_back[0][0]) % 12
            this.relojes_front[2][0] = (12 - this.relojes_back[2][2]) % 12
            this.relojes_front[2][2] = (12 - this.relojes_back[2][0]) % 12
        }
        console.table([this.relojes_front[0].concat(this.relojes_back[0]),this.relojes_front[1].concat(this.relojes_back[1]),this.relojes_front[2].concat(this.relojes_back[2])])
    }

    atrasar_relojes_front(i) {
        let l

        if (this.pivotes_front[i]) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (this.relojes_front_on[j][k]) {
                        l = this.relojes_front[j][k]
                        this.relojes_front[j][k] = (l+11) % 12// (l+12-1) % 12
                    }
                }
            }
            // REFLEJAR EN EL RELOJ BACK
            this.relojes_back[0][0] = (12 - this.relojes_front[0][2]) % 12
            this.relojes_back[0][2] = (12 - this.relojes_front[0][0]) % 12
            this.relojes_back[2][0] = (12 - this.relojes_front[2][2]) % 12
            this.relojes_back[2][2] = (12 - this.relojes_front[2][0]) % 12
        }
        else {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (this.relojes_back_on[j][k]) {
                        l = this.relojes_back[j][k]
                        this.relojes_back[j][k] = (l+1) % 12
                    }
                }
            }
            // REFLEJAR EN EL RELOJ FRONT
            this.relojes_front[0][0] = (12 - this.relojes_back[0][2]) % 12
            this.relojes_front[0][2] = (12 - this.relojes_back[0][0]) % 12
            this.relojes_front[2][0] = (12 - this.relojes_back[2][2]) % 12
            this.relojes_front[2][2] = (12 - this.relojes_back[2][0]) % 12
        }
        console.table([this.relojes_front[0].concat(this.relojes_back[0]),this.relojes_front[1].concat(this.relojes_back[1]),this.relojes_front[2].concat(this.relojes_back[2])])
    }
    get_relojes_front() {
        return this.relojes_front[0].concat(this.relojes_front[1]).concat(this.relojes_front[2])
    }
    get_relojes_back() {
        return this.relojes_back[0].concat(this.relojes_back[1]).concat(this.relojes_back[2])
    }
}
/* FIN DEFINICION DE CLASES ***************************************************/

/* DEFINICION DE FUNCIONES GLOBALES *******************************************/
// SOLO PARA USO DENTRO DE LA FUNCION iniciar()
function refrescar_pivot(pivot_front, pivot_back) {
    if (pivot_front.src.includes("img/on.jpg")) {
        pivot_front.src = "img/off.jpg"
        pivot_back.src = "img/on.jpg"
    }
    else {
        pivot_front.src = "img/on.jpg"
        pivot_back.src = "img/off.jpg"
    }
}

// SOLO PARA USO DENTRO DE LA FUNCION iniciar()
function refrescar_relojes() {
    for (let i = 0, rf = juego.get_relojes_front(), rb = juego.get_relojes_back(), grados; i < 9; i++) {
        grados = rf[i] * 30
        relojes_front[i].style.transform = "rotate(" + grados + "deg)"
        grados = rb[i] * 30
        relojes_back[i].style.transform = "rotate(" + grados + "deg)"
    }
}

function reiniciar_imagenes() {
    pivot_front_1.src = "img/on.jpg"
    pivot_front_2.src = "img/on.jpg"
    pivot_front_3.src = "img/on.jpg"
    pivot_front_4.src = "img/on.jpg"
    pivot_back_1.src = "img/off.jpg"
    pivot_back_2.src = "img/off.jpg"
    pivot_back_3.src = "img/off.jpg"
    pivot_back_4.src = "img/off.jpg"
    for (let i = 0; i < 9; i++) {
        relojes_front[i].style.transform = "rotate(0deg)"
        relojes_back[i].style.transform = "rotate(0deg)"
    }
}

// FUNCION PRINCIPAL QUE DA INICIO A LA APLICACION
function iniciar() {
    btn_front_1_plus = document.getElementById("boton_frontal_1plus")
    btn_front_1_plus.addEventListener("click", function(){
        juego.adelantar_relojes_front(0)
        refrescar_relojes()
    }, false)
    btn_front_2_plus = document.getElementById("boton_frontal_2plus")
    btn_front_2_plus.addEventListener("click", function(){
        juego.adelantar_relojes_front(1)
        refrescar_relojes()
    }, false)
    btn_front_3_plus = document.getElementById("boton_frontal_3plus")
    btn_front_3_plus.addEventListener("click", function(){
        juego.adelantar_relojes_front(2)
        refrescar_relojes()
    }, false)
    btn_front_4_plus = document.getElementById("boton_frontal_4plus")
    btn_front_4_plus.addEventListener("click", function(){
        juego.adelantar_relojes_front(3)
        refrescar_relojes()
    }, false)
    btn_front_1_minus = document.getElementById("boton_frontal_1-")
    btn_front_1_minus.addEventListener("click", function(){
        juego.atrasar_relojes_front(0)
        refrescar_relojes()
    }, false)
    btn_front_2_minus = document.getElementById("boton_frontal_2-")
    btn_front_2_minus.addEventListener("click", function(){
        juego.atrasar_relojes_front(1)
        refrescar_relojes()
    }, false)
    btn_front_3_minus = document.getElementById("boton_frontal_3-")
    btn_front_3_minus.addEventListener("click", function(){
        juego.atrasar_relojes_front(2)
        refrescar_relojes()
    }, false)
    btn_front_4_minus = document.getElementById("boton_frontal_4-")
    btn_front_4_minus.addEventListener("click", function(){
        juego.atrasar_relojes_front(3)
        refrescar_relojes()
    }, false)
    btn_back_1_plus = document.getElementById("boton_back_1plus")
    btn_back_1_plus.addEventListener("click", function(){
        juego.atrasar_relojes_front(1)
        refrescar_relojes()
    }, false)//
    btn_back_2_plus = document.getElementById("boton_back_2plus")
    btn_back_2_plus.addEventListener("click", function(){
        juego.atrasar_relojes_front(0)
        refrescar_relojes()
    }, false)
    btn_back_3_plus = document.getElementById("boton_back_3plus")
    btn_back_3_plus.addEventListener("click", function(){
        juego.atrasar_relojes_front(3)
        refrescar_relojes()
    }, false)
    btn_back_4_plus = document.getElementById("boton_back_4plus")
    btn_back_4_plus.addEventListener("click", function(){
        juego.atrasar_relojes_front(2)
        refrescar_relojes()
    }, false)//
    btn_back_1_minus = document.getElementById("boton_back_1-")
    btn_back_1_minus.addEventListener("click", function(){
        juego.adelantar_relojes_front(1)
        refrescar_relojes()
    }, false)
    btn_back_2_minus = document.getElementById("boton_back_2-")
    btn_back_2_minus.addEventListener("click", function(){
        juego.adelantar_relojes_front(0)
        refrescar_relojes()
    }, false)
    btn_back_3_minus = document.getElementById("boton_back_3-")
    btn_back_3_minus.addEventListener("click", function(){
        juego.adelantar_relojes_front(3)
        refrescar_relojes()
    }, false)
    btn_back_4_minus = document.getElementById("boton_back_4-")
    btn_back_4_minus.addEventListener("click", function(){
        juego.adelantar_relojes_front(2)
        refrescar_relojes()
    }, false)
    
    pivot_front_1 = document.getElementById("pivot_front_1")
    pivot_front_1.addEventListener("click", function(){
        juego.set_pivot_front(0)
        refrescar_pivot(this, pivot_back_2)
    }, false)
    pivot_front_2 = document.getElementById("pivot_front_2")
    pivot_front_2.addEventListener("click", function(){
        juego.set_pivot_front(1)
        refrescar_pivot(this, pivot_back_1)
    }, false)
    pivot_front_3 = document.getElementById("pivot_front_3")
    pivot_front_3.addEventListener("click", function(){
        juego.set_pivot_front(2)
        refrescar_pivot(this, pivot_back_4)
    }, false)
    pivot_front_4 = document.getElementById("pivot_front_4")
    pivot_front_4.addEventListener("click", function(){
        juego.set_pivot_front(3)
        refrescar_pivot(this, pivot_back_3)
    }, false)
    pivot_back_1 = document.getElementById("pivot_back_1")
    pivot_back_1.addEventListener("click", function(){
        juego.set_pivot_front(1)
        refrescar_pivot(pivot_front_2, this)
    }, false)
    pivot_back_2 = document.getElementById("pivot_back_2")
    pivot_back_2.addEventListener("click", function(){
        juego.set_pivot_front(0)
        refrescar_pivot(pivot_front_1, this)
    }, false)
    pivot_back_3 = document.getElementById("pivot_back_3")
    pivot_back_3.addEventListener("click", function(){
        juego.set_pivot_front(3)
        refrescar_pivot(pivot_front_4, this)
    }, false)
    pivot_back_4 = document.getElementById("pivot_back_4")
    pivot_back_4.addEventListener("click", function(){
        juego.set_pivot_front(2)
        refrescar_pivot(pivot_front_3, this)
    }, false)

    relojes_front[0] = document.getElementById("reloj_frontal_0_0")
    relojes_front[1] = document.getElementById("reloj_frontal_0_1")
    relojes_front[2] = document.getElementById("reloj_frontal_0_2")
    relojes_front[3] = document.getElementById("reloj_frontal_1_0")
    relojes_front[4] = document.getElementById("reloj_frontal_1_1")
    relojes_front[5] = document.getElementById("reloj_frontal_1_2")
    relojes_front[6] = document.getElementById("reloj_frontal_2_0")
    relojes_front[7] = document.getElementById("reloj_frontal_2_1")
    relojes_front[8] = document.getElementById("reloj_frontal_2_2")
    
    relojes_back[0] = document.getElementById("reloj_back_0_0")
    relojes_back[1] = document.getElementById("reloj_back_0_1")
    relojes_back[2] = document.getElementById("reloj_back_0_2")
    relojes_back[3] = document.getElementById("reloj_back_1_0")
    relojes_back[4] = document.getElementById("reloj_back_1_1")
    relojes_back[5] = document.getElementById("reloj_back_1_2")
    relojes_back[6] = document.getElementById("reloj_back_2_0")
    relojes_back[7] = document.getElementById("reloj_back_2_1")
    relojes_back[8] = document.getElementById("reloj_back_2_2")
    
    btn_comenzar = document.getElementById("comenzar")
    btn_reiniciar = document.getElementById("reiniciar")
    btn_reiniciar.addEventListener("click", function(){
        juego.reiniciar()
        reiniciar_imagenes()
    }, false)
    //alert()
}
/* FIN DEFINICION DE FUNCIONES GLOBALES ***************************************/

/* DEFINICION DE VARIABLE GLOBALES ********************************************/
var btn_front_1_plus
var btn_front_1_minus
var btn_front_2_plus
var btn_front_2_minus
var btn_front_3_plus
var btn_front_3_minus
var btn_front_4_plus
var btn_front_4_minus
var btn_back_1_plus
var btn_back_1_minus
var btn_back_2_plus
var btn_back_2_minus
var btn_back_3_plus
var btn_back_3_minus
var btn_back_4_plus
var btn_back_4_minus

var pivot_front_1
var pivot_front_2
var pivot_front_3
var pivot_front_4
var pivot_back_1
var pivot_back_2
var pivot_back_3
var pivot_back_4

var relojes_front = []
var relojes_back = []

var btn_comenzar
var btn_reiniciar

var juego
/* FIN DEFINICION DE VARIABLES GLOBALES ***************************************/


/* COMIENZO DE LA APLICACIÓN **************************************************/
juego = new RelojJuego()

// COMIENZO ETAPA ASINCRONICA PARA INTERACCION DE CON EL USUARIO
window.addEventListener("load", iniciar, false)