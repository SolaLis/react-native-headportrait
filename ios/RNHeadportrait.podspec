
Pod::Spec.new do |s|
  s.name         = "RNHeadportrait"
  s.version      = "1.0.0"
  s.summary      = "RNHeadportrait"
  s.description  = <<-DESC
                  RNHeadportrait
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNHeadportrait.git", :tag => "master" }
  s.source_files  = "RNHeadportrait/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  