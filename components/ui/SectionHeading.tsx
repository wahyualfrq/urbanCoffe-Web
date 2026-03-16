interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) => {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-dark-brown font-poppins mb-4 tracking-tight leading-tight">
        {title}
      </h2>
      <div className={`w-16 h-1 bg-coffee-accent rounded-full mb-4 md:mb-6 ${centered ? 'mx-auto' : 'mr-auto'}`} />
      {subtitle && (
        <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
          {subtitle}
        </p>
      )}
    </div>
  );
};
