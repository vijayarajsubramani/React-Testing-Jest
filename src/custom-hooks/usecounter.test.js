import { renderHook, act } from "@testing-library/react";
import useCounter from ".";

describe('custom hooks', () => {
    test('render the initial count', () => {
        const { result } = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })
    test('should be increment the count', () => {
        const { result } = renderHook(useCounter)
        act(() => result.current.handleIncrement())
        expect(result.current.count).toBe(1)
    })
    test('should be decrement the count', () => {
        const { result } = renderHook(useCounter)
        act(() => result.current.handleDecrement())
        expect(result.current.count).toBe(-1)
    })
})
