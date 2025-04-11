import { NotesConfiguration } from '@/types'

export const useAppStore = defineStore('app', () => {
    const darkMode = ref(true)
    const activeStep = ref(0)
    const loading = ref(false)
    const errorMessage = ref('')
    const successMessage = ref('')
    const notes = ref('')
    const configuration: NotesConfiguration = ref({
        outputType: 'summary',
        meetingDetails: {
            meetingTitle: '',
            meetingDate: '',
            attendees: []
        }
    })
    const output = ref('')

    const isDarkMode = computed(() => darkMode.value)
    const getActiveStep = computed(() => activeStep.value)
    const isLoading = computed(() => loading.value)
    const getErrorMessage = computed(() => errorMessage.value)
    const getSuccessMessage = computed(() => successMessage.value)
    const getNotes = computed(() => notes.value)
    const getConfiguration = computed(() => configuration.value)
    const getOutput = computed(() => output.value)

    function setIsDarkMode(value: boolean) {
        darkMode.value = value
    }

    function setActiveStep(value: number) {
        activeStep.value = value
    }

    function setIsLoading(value: boolean) {
        loading.value = value
    }

    function setErrorMessage(value: string) {
        errorMessage.value = value
    }

    function setSuccessMessage(value: string) {
        successMessage.value = value
    }

    function setNotes(value: string) {
        notes.value = value
    }

    return {
        isDarkMode,
        getActiveStep,
        isLoading,
        getErrorMessage,
        getSuccessMessage,
        getNotes,
        getConfiguration,
        getOutput,
        setIsDarkMode,
        setActiveStep,
        setIsLoading,
        setErrorMessage,
        setSuccessMessage,
        setNotes
    }
})
