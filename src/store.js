import create from 'zustand'


export const useListPontos = create((set) => ({
    state: [
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 11/05/2022 12:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 01/07/2022 07:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 16/10/2022 12:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 27/10/2022 08:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 18/12/2022 06:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 11/05/2023 12:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 01/07/2023 07:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 16/10/2023 12:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 27/10/2023 08:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 18/12/2023 06:45:12'
        },
    ],
    setState: () => set((state) => ({ state: state})),
  }))


  const useBearStore = create((set) => ({
    bears: [
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 11/05/2022 12:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 01/07/2022 07:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 16/10/2022 12:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 27/10/2022 08:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 18/12/2022 06:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 11/05/2023 12:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 01/07/2023 07:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 16/10/2023 12:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 27/10/2023 08:45:12'
        },
        {
            nomeUsuario:'Luis Felipe',
            dataPonto:' 18/12/2023 06:45:12'
        },
    ],
    increasePopulation: () => set((state) => ({ bears: state.bears })),
  }))