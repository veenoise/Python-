import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Home = () => {
  return (
    <div className="min-h-[calc(100dvh-64px)] container mx-auto">
      <h2 className="text-center text-2xl m-5">Python++</h2>
      <div className="border rounded-md p-4 bg-neutral-800">
        <Tabs defaultValue="input">
          <div className="w-full flex justify-center">
            <TabsList className="bg-neutral-300">
              <TabsTrigger value="input">Input</TabsTrigger>
              <TabsTrigger value="output">Output</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="input">
            <Textarea placeholder="Type your code here." className="resize-none mb-4" rows={25} />
            <div className="flex justify-end">
              <Button className="bg-[#FFDD6F] text-neutral-800 hover:bg-[#FFDD40] hover:text-neutral-700">Analyze</Button>  
            </div>
          </TabsContent>
          <TabsContent value="output">
            <p className="text-white">This is the content</p>
          </TabsContent>
        </Tabs>
      </div>
      
      
    </div>
  )
}

export default Home