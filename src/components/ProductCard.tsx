import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Eye, Truck } from "lucide-react";
import { Product, getWhatsAppOrderLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-product group relative"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isSale && (
          <span className="badge-sale">SALE!</span>
        )}
        {product.isLimitedOffer && (
          <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
            LIMITED OFFER
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Link
            to={`/product/${product.slug}`}
            className="p-3 bg-background rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="View product details"
          >
            <Eye className="h-5 w-5" />
          </Link>
          <a
            href={getWhatsAppOrderLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-whatsapp rounded-full shadow-lg hover:bg-whatsapp-dark text-primary-foreground transition-colors"
            aria-label="Order via WhatsApp"
          >
            <ShoppingBag className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {product.category}
        </span>
        
        <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <Truck className="h-4 w-4 text-whatsapp" />
          <span>Free Delivery</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="text-2xl font-heading font-bold text-primary">
              KSh {product.price.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground"> / meter</span>
            </p>
          </div>
          
          <div className="flex gap-2">
            <Link
              to={`/product/${product.slug}`}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View
            </Link>
            <Link
              to={`/product/${product.slug}`}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Buy
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
