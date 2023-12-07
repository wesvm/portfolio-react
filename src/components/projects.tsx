import { ProjectCards } from "@/components/project-cards"

const data: ProjectData[] = [
    {
        "id": "9e8f10a2-35fe-4ff5-94ac-b836f2de4f4d",
        "title": "Geological Engineer",
        "description": "Antisocial personality disorder",
        "image": "http://dummyimage.com/687x625.png/cc0000/ffffff"
    },
    {
        "id": "aab78688-c62c-46f5-b211-11b49f964ada",
        "title": "General Manager",
        "description": "Unspecified donor, stem cells",
        "image": "http://dummyimage.com/538x717.png/cc0000/ffffff"
    },
    {
        "id": "1718d0c2-b832-45bc-aae6-c191886e1f31",
        "title": "Accounting Assistant II",
        "description": "Oth osteopor w crnt path fx, unsp forearm, 7thP",
        "image": "http://dummyimage.com/546x670.png/cc0000/ffffff"
    },
    {
        "id": "fffae432-a600-45dd-9939-6ed13d78847f",
        "title": "Web Developer I",
        "description": "Occup of hv veh inj in clsn w nonmtr vehicle nontraf, init",
        "image": "http://dummyimage.com/738x629.png/5fa2dd/ffffff"
    },
    {
        "id": "ed5f6386-45af-42f1-84dc-62d288267ea4",
        "title": "Research Assistant III",
        "description": "Disp fx of proximal phalanx of oth finger, init for clos fx",
        "image": "http://dummyimage.com/519x559.png/dddddd/000000"
    },
    {
        "id": "edd76083-ef51-4d47-b365-282648296ac1",
        "title": "Civil Engineer",
        "description": "Osseous stenosis of neural canal of cervical region",
        "image": "http://dummyimage.com/584x540.png/ff4444/ffffff"
    },
    {
        "id": "aade54d1-73a4-4d8d-92f6-b82fe65a3a38",
        "title": "Sales Associate",
        "description": "Unstbl burst fx first thor vert, subs for fx w delay heal",
        "image": "http://dummyimage.com/575x522.png/dddddd/000000"
    },
    {
        "id": "d7e4706b-4cd5-4a40-9059-9e40ddc55e5e",
        "title": "VP Product Management",
        "description": "Non-in-line roller-skater colliding w statnry obj, init",
        "image": "http://dummyimage.com/529x509.png/5fa2dd/ffffff"
    },
    {
        "id": "cce16d9c-5912-4aa5-9df8-e92630ce72d9",
        "title": "Junior Executive",
        "description": "Jump/div into swim pool strk bottom cause oth injury, sqla",
        "image": "http://dummyimage.com/510x670.png/ff4444/ffffff"
    },
    {
        "id": "014dec97-a96a-45e3-8676-75fef8073115",
        "title": "Nurse Practicioner",
        "description": "Displ bimalleol fx l low leg, subs for clos fx w nonunion",
        "image": "http://dummyimage.com/742x613.png/dddddd/000000"
    }
]

export const Projects = () => {
    return (
        <section>
            <header className="mb-6">
                <h1 className="text-indigo-100 text-2xl font-bold">Proyectos</h1>
            </header>

            <ProjectCards data={data} />
        </section>
    )
}