import { getAllProjects } from '@/actions/getAllProjects'
import { CardProject } from '@/components/CardProject'

export default function Portfolio() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-1 justify-center">
      <div className="max-w-5xl w-full mt-16">
        <h1 className=" pl-1 text-4xl font-montserrat font-bold animate-fade ">
          Portfolio
        </h1>

        <div className="my-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {projects &&
            projects.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  )
}
