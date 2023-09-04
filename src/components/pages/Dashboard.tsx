import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


const CDNURL = "https://uxlsnutlidhrgriiozjf.supabase.co/storage/v1/object/public/Images/"


const Dashboard = () => {
    const [images, setImages] = useState<any[]>([])

    const user = useUser();
    const supabase = useSupabaseClient();

    const navigate = useNavigate();

    if (!user) {
        navigate("/signin")
    }
    

    // FUNC. TO FETCH IMG
    async function getImages() {
        const { data } = await supabase
            .storage
            .from("Images")
            .list(user?.id + "/", {
                limit: 100,
                offset: 0,
                sortBy: { column: "name", order: "asc" }
            });

        if (data !== null) {
            setImages(data)
        }
    }


    // FUNC. FOR UPLOADING IMG
    async function uploadImage(e: ChangeEvent<HTMLInputElement>) {
        // @ts-ignore
        const file = e.target.files[0]

        const { data, error } = await supabase
            .storage
            .from("Images")
            .upload(user?.id + "/" + uuidv4(), file)

        if (data) {
            getImages();
        } else {
            console.log(error);
        }
    }


    // FOR DELETING PIC
    async function deletePic(imgName: string) {
        const { error } = await supabase
            .storage
            .from("Images")
            .remove([user?.id + "/" + imgName])

        if (error) console.log(error);
        else getImages();
    }


    // FOR DOWNLOADING PIC
    // async function downloadPic(imgName: string) {
    //     const { data, error } = await supabase
    //         .storage
    //         .from("Images")
    //         .download(user?.id + "/" + imgName)

    //     console.log("Error:--", error);
    //     console.log("Data:--", data)
    // }


    useEffect(() => {
        getImages();
    }, [user])


    return (
        <>
            <Card className="mx-auto text-center space-y-6 sm:space-y-0 my-16 px-2 sm:px-10 md:px-0 md:w-1/2">
                <CardHeader>
                    <CardTitle>Upload Images to your ImageWall</CardTitle>

                    <CardDescription className="text-xs xs:text-base">
                        Current User: {user?.email}
                    </CardDescription>
                </CardHeader>


                <CardContent className="flex flex-col gap-y-2 sm:flex-row items-center gap-x-4">
                    <Label htmlFor="image">Click here to upload image:</Label>
                    <Input
                        id="image"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => uploadImage(e)}
                    />
                </CardContent>
            </Card>

            <div className="py-12 px-1 xs:px-3 sm:px-10">
                <h1 className="text-center text-3xl sm:text-4xl font-bold underline">Your ImageWall</h1>

                <div className="pt-12 flex flex-row items-center flex-wrap justify-center gap-4">
                    {images.length === 0 ? (
                        <h1 className="text-md dark:text-zinc-400">You have no image in your ImageWall</h1>
                    ) : (
                        <>
                            {images.map((img: File) => (
                                <Card
                                    key={CDNURL + user?.id + "/" + img.name}
                                    className="w-fit py-12"
                                >
                                    <CardContent>
                                        <img
                                            src={CDNURL + user?.id + "/" + img.name}
                                            className="h-72 sm:h-96"
                                        />
                                    </CardContent>

                                    <CardFooter className="p-0 m-0">
                                        <Button
                                            variant={"destructive"}
                                            className="mx-auto"
                                            onClick={() => deletePic(img.name)}
                                        >
                                            Delete
                                        </Button>

                                        {/* <Button
                                            variant={"outline"}
                                            className="mx-auto"
                                            onClick={() => downloadPic(img.name)}
                                        >
                                            Download
                                        </Button> */}
                                    </CardFooter>
                                </Card>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Dashboard

