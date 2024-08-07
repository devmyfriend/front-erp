import { defineStore } from "pinia";
import * as receiptServices from "@/services/receiptServices";

export const receiptStore = defineStore("receipt", {
  state: () => ({
    ListadoComprobantes: [],
  }),
  getters: {
    getComprobantes(state) {
      return state.ListadoComprobantes;
    },
  },
  actions: {
    async cargarComprobantes() {
      const data = await receiptServices.cargarComprobantes();
      if (data) {
        this.ListadoComprobantes = data;
      }
    },
    async crearComprobante(comprobante) {
      const data = await receiptServices.crearComprobante(comprobante);
      if (data) {
        this.cargarComprobantes();
        return true;
      } else {
        return false;
      }
    },
    async actualizarComprobante(comprobante) {
      const data = await receiptServices.actualizarComprobante(comprobante);
      if (data) {
        this.cargarComprobantes();
        return true;
      } else {
        return false;
      }
    },
    async eliminarComprobante(comprobante) {
      const data = await receiptServices.eliminarComprobante(comprobante);
      if (data) {
        this.cargarComprobantes();
        return true;
      } else {
        return false;
      }
    },
  },
});
