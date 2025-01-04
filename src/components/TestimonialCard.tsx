import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialCard = ({ name, rating, text, service }: TestimonialCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {name}
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{text}</p>
        <p className="text-sm text-primary mt-2">{service}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;