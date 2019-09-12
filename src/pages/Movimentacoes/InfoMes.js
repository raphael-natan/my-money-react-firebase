import React from 'react'
import { useMesApi } from '../../api'

const InfoMes = ({ data }) => {
    const { infoMes, alterarMes } = useMesApi(data)

    const alterarPrevisaoEntrada = (e) => {
        alterarMes({ previsao_entrada: e.target.value })
    }

    const alterarPrevisaoSaida = (e) => {
        alterarMes({ previsao_saida: e.target.value })
    }

    if (infoMes.loading) {
        return <p>Carregando dados do mês...</p>
    }
    if (infoMes.data) {
        return (
            <div>
                Previsão entrada: {infoMes.data.previsao_entrada} <input type='text' onBlur={alterarPrevisaoEntrada} /> / Previsão saída: {infoMes.data.previsao_saida} <input type='text' onBlur={alterarPrevisaoSaida} /><br />
                Entradas: {infoMes.data.entradas} / Saídas: {infoMes.data.saidas}
            </div>
        )
    }
    return null
}

export default InfoMes