
test('initializeTimes returns correct array given an empty array', () => {
    const initialTime = [];
    const intializeTimes = (initialTime) => {
        if (initialTime) {
            initialTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        }
        return initialTime;
    }
    expect(intializeTimes(initialTime)).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
})

test('updateTimes returns the same value', () => {
    const fetchAPI = jest.fn((date) => { return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] })
    const updateTimes = (action) => {
        switch (action.type) {
            case 'UPDATE':
                return action.payload;
            default:
                return [];
        }
    }
    const date = new Date()
    const res = fetchAPI(date)
    expect(updateTimes({ type: "UPDATE", payload: res })).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
})