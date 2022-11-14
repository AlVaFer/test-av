/* eslint-disable no-undef */
/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import { store } from '../../../store/index'
import reducer, { setLoading } from '../../../store/features/loading'
import PodcastSearchBar from './'
import mock from './mock.json'

const mockSetFilteredPodcasts = jest.fn()

const reduxState = {
  loading: false
}

function hasInputValue (e, inputValue) {
  return screen.getByDisplayValue(inputValue) === e
}

const props = {
  data: mock,
  setFilteredPodcasts: mockSetFilteredPodcasts,
  filteredPodcasts: []
}

describe('<PodcastSearchBar/>', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  const setup = () => {
    render(
      <Provider store={store}>
        <PodcastSearchBar {...props} />
      </Provider>
    )
  }

  test('Detect elements', async () => {
    setup()
    const badge = await screen.getByTestId('badge')
    expect(badge).toBeInTheDocument()
    const badgeValue = await screen.getByTestId('badge').textContent
    expect(badgeValue).toBe('0')

    const input = await screen.findByPlaceholderText('search')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  test('setFilteredPodcasts data received with no typing in search input', async () => {
    setup()
    expect(mockSetFilteredPodcasts).toBeCalledTimes(1)
    expect(mockSetFilteredPodcasts).toBeCalledWith(mock.feed.entry)

    const input = await screen.findByPlaceholderText('search')
    fireEvent.change(input, { target: { value: '' } })
    expect(hasInputValue(input, '')).toBe(true)
    expect(mockSetFilteredPodcasts).toBeCalledTimes(1)
    expect(mockSetFilteredPodcasts).toBeCalledWith(mock.feed.entry)
  })

  test('setFilteredPodcasts data received after typing in search input', async () => {
    setup()
    expect(mockSetFilteredPodcasts).toBeCalledTimes(1)
    expect(mockSetFilteredPodcasts).toBeCalledWith(mock.feed.entry)

    const input = await screen.findByPlaceholderText('search')
    fireEvent.change(input, { target: { value: 'J' } })
    expect(hasInputValue(input, 'J')).toBe(true)
    expect(mockSetFilteredPodcasts).toBeCalledTimes(2)
    expect(mockSetFilteredPodcasts).toBeCalledWith(mock.feed.entry)
  })

  test('Badge initial value', async () => {
    setup()
    const badgeValue = await screen.getByTestId('badge').textContent
    expect(badgeValue).toBe('0')
  })

  test('Store', async () => {
    setup()
    expect(reducer(undefined, setLoading(false))).toEqual(reduxState)
    expect(reducer(undefined, setLoading(true))).toEqual({
      ...reduxState,
      loading: true
    })
  })

  test('Type text using UserEvent', async () => {
    setup()
    const user = userEvent.setup()
    const textBox = screen.getByRole('textbox', {
      name: /textbox-search/i
    })

    await user.clear(textBox)
    await user.type(textBox, 'Text')
    expect(textBox).toHaveValue('Text')
  })

  test('Matches with previous snapshot', () => {
    const component = (
      <Provider store={store}>
        <PodcastSearchBar {...props} />
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
