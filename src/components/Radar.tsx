'use client'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js'
import { useEffect, useState } from 'react'

import { Radar as RadarChart } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  Colors,
)

export type Skill =
  | 'HTML'
  | 'CSS'
  | 'Javascript'
  | 'Next js'
  | 'React js'
  | 'Node js'
  | 'Typescript'
  | 'SQL'

const labels = [
  'Conhecimento',
  'Experiencia',
  'Habilidades',
  'Boas práticas',
  'Lógica',
]

interface RadarProps {
  skill: Skill
}

export function Radar({ skill }: RadarProps) {
  const [data, setData] = useState([0, 0, 0, 0, 0])

  function numbersOfSkill(skill: Skill) {
    switch (skill) {
      case 'CSS':
        setData([5, 4, 5, 4, 5])
        break
      case 'HTML':
        setData([5, 5, 5, 4, 5])
        break
      case 'Javascript':
        setData([4, 3, 4, 4, 5])
        break
      case 'Next js':
        setData([3, 3, 4, 4, 4])
        break
      case 'Node js':
        setData([3, 3, 3, 4, 3])
        break
      case 'React js':
        setData([4, 3, 4, 4, 4])
        break
      case 'Typescript':
        setData([4, 3, 4, 4, 4])
        break
      case 'SQL':
        setData([3, 2, 2, 3, 2])
        break
      default:
        setData([0, 0, 0, 0, 0])
    }
  }

  useEffect(() => {
    numbersOfSkill(skill)
  }, [skill])

  return (
    <div className="-mt-4 w-full">
      <RadarChart
        id="radar"
        data={{
          labels,
          datasets: [
            {
              data,
            },
          ],
        }}
        options={{
          aspectRatio: 1,
          color: '#fff',
          backgroundColor: '#0890b229',
          borderColor: '#0891B2',
          showLine: true,
          plugins: {
            legend: {
              maxHeight: 0,
              display: false,
            },
          },
          datasets: {
            radar: {
              pointBorderWidth: 3,
              pointBackgroundColor: '#0891B2',
            },
          },
          scales: {
            r: {
              min: 0,
              max: 5,
              grid: {
                circular: true,
                color: '#171717',
              },
              pointLabels: {
                color: '#A3A3A3',
                font: {
                  size: 18,
                },
              },
              ticks: {
                backdropColor: 'transparent',
                color: 'transparent',
                font: {
                  size: 20,
                },
              },
            },
          },
        }}
      />
    </div>
  )
}
