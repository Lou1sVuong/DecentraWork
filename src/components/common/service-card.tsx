import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { LucideIcon } from "lucide-react"

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <Icon className="w-10 h-10 mb-2 text-blue-600 dark:text-blue-400" />
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white">
          View Details
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}