import { defineStore } from "pinia";
import * as taxServices from "@/services/taxServices";

export const taxStore = defineStore("tax", {
  state: () => ({
    ListadoImpuestos: [],
  }),
  getters: {
    getImpuestos(state) {
      return state.ListadoImpuestos;
    },
  },
  actions: {
    async cargarImpuestos() {
      const data = await taxServices.cargarImpuestos();
      if (data) {
        this.ListadoImpuestos = data;
      }
    },
    async crearImpuesto(impuesto) {
      const data = await taxServices.crearImpuesto(impuesto);
      if (data) {
        this.cargarImpuestos();
        return true;
      } else {
        return false;
      }
    },
    async actualizarImpuesto(impuesto) {
      const data = await taxServices.actualizarImpuesto(impuesto);
      if (data) {
        this.cargarImpuestos();
        return true;
      } else {
        return false;
      }
    },
    async eliminarImpuesto(impuesto) {
      const data = await taxServices.eliminarImpuesto(impuesto);
      if (data) {
        this.cargarImpuestos();
        return true;
      } else {
        return false;
      }
    },
  },
});
